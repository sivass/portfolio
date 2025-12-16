output "api_url" {
  description = "The URL of the API Gateway"
  value       = aws_apigatewayv2_api.api.api_endpoint
}

output "custom_domain_url" {
  description = "The URL of the API using custom domain"
  value       = "https://${var.domain_name}"
}
