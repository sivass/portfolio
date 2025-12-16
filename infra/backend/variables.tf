variable "supabase_url" {
    description = "The Supabase project URL"
    type        = string
}

variable "supabase_key" {
    description = "The Supabase service role key"
    type        = string
}

variable "cors_origin" {
    description = "The allowed CORS origin"
    type        = string
}

variable "domain_name" {
  description = "Custom API domain name"
  type        = string
  default     = "api.sivapadmanaban.com"
}

variable "route53_zone_id" {
  description = "Route 53 Hosted Zone ID for your domain"
  type        = string
}