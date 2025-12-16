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