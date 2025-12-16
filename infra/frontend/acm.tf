resource "aws_acm_certificate" "frontend" {
  provider          = aws.us_east_1
  domain_name       = "sivapadmanaban.com"
  validation_method = "DNS"

  subject_alternative_names = [
    "www.sivapadmanaban.com"
  ]
}
