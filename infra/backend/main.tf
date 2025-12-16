provider "aws" {
    region = "ap-southeast-1"
}

# IAM Role for Lambda
resource "aws_iam_role" "lambda_role" {
    name ="portfolio-lambda-role"

    assume_role_policy = jsonencode({
        Version = "2012-10-17"
        Statement = [{
            Effect = "Allow"
            Principal = {
                Service = "lambda.amazonaws.com"
            }
            Action = "sts:AssumeRole"
        }]
    })
}

resource "aws_iam_role_policy_attachment" "basic" {
    role = aws_iam_role.lambda_role.name
    policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# Lambda Function
resource "aws_lambda_function" "general_service" {
    function_name = "portfolio-general-service"
    role          = aws_iam_role.lambda_role.arn
    handler       = "dist/handler.handler"
    runtime       = "nodejs20.x"
    filename      = "../../backend/services/general/function.zip"
    timeout       = 10
    memory_size   = 256

    environment {
      variables = {
        SUPABASE_URL = var.supabase_url
        SUPABASE_SERVICE_ROLE_KEY = var.supabase_key
        CROSS_ORIGIN  = var.cors_origin
        PORT           = "4000"
      }
    }
}

# API Gateway (HTTP API)
resource "aws_apigatewayv2_api" "api" {
  name         = "portfolio-api"
  protocol_type = "HTTP"

    cors_configuration {
        allow_origins = ["*"]
        allow_methods = ["GET", "POST", "OPTIONS"]
        allow_headers = ["content-type"]
    }
}

resource "aws_apigatewayv2_integration" "lambda" {
    api_id           = aws_apigatewayv2_api.api.id
    integration_type = "AWS_PROXY"
    integration_uri  = aws_lambda_function.general_service.arn  
}

resource "aws_apigatewayv2_route" "subscribe" {
    api_id    = aws_apigatewayv2_api.api.id
    route_key = "POST /api/subscribe/submit"
    target    = "integrations/${aws_apigatewayv2_integration.lambda.id}" 
}

resource "aws_apigatewayv2_route" "contact" {
    api_id    = aws_apigatewayv2_api.api.id
    route_key = "POST /api/contact/submit"
    target    = "integrations/${aws_apigatewayv2_integration.lambda.id}"
}

resource "aws_apigatewayv2_stage" "default" {
    api_id      = aws_apigatewayv2_api.api.id
    name        = "$default"
    auto_deploy = true
}

# Permissions for API Gateway to invoke Lambda
resource "aws_lambda_permission" "apigw" {
    statement_id  = "AllowAPIGatewayInvoke"
    action        = "lambda:InvokeFunction"
    function_name = aws_lambda_function.general_service.function_name
    principal     = "apigateway.amazonaws.com"
    source_arn    = "${aws_apigatewayv2_api.api.execution_arn}/*/*"
}

# ACM Certificate
resource "aws_acm_certificate" "api_cert" {
  domain_name       = var.domain_name
  validation_method = "DNS"
}

# DNS validation records
resource "aws_route53_record" "api_cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.api_cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      type   = dvo.resource_record_type
      record = dvo.resource_record_value
    }
  }

  zone_id = var.route53_zone_id
  name    = each.value.name
  type    = each.value.type
  records = [each.value.record]
  ttl     = 60
}

# Validate ACM certificate
resource "aws_acm_certificate_validation" "api_cert_validation" {
  certificate_arn         = aws_acm_certificate.api_cert.arn
  validation_record_fqdns = [for record in aws_route53_record.api_cert_validation : record.fqdn]
}

# API Gateway Custom Domain
resource "aws_apigatewayv2_domain_name" "api_custom_domain" {
  domain_name = var.domain_name

  domain_name_configuration {
    certificate_arn = aws_acm_certificate_validation.api_cert_validation.certificate_arn
    endpoint_type   = "REGIONAL"
    security_policy = "TLS_1_2"
  }
}

# API Gateway Stage Mapping
resource "aws_apigatewayv2_api_mapping" "api_mapping" {
  api_id      = aws_apigatewayv2_api.api.id
  domain_name = aws_apigatewayv2_domain_name.api_custom_domain.domain_name
  stage       = aws_apigatewayv2_stage.default.id
}

# Route 53 Alias Record
resource "aws_route53_record" "api" {
  zone_id = var.route53_zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_apigatewayv2_domain_name.api_custom_domain.domain_name_configuration[0].target_domain_name
    zone_id                = aws_apigatewayv2_domain_name.api_custom_domain.domain_name_configuration[0].hosted_zone_id
    evaluate_target_health = false
  }
}
