
# Siva Padmanaban – Portfolio Platform

A modern, serverless personal portfolio platform built with Next.js, Node.js (Lambda), and AWS, following DDD, SOLID, and Infrastructure as Code (Terraform) principles.

## Architecture Overview

### Frontend

- Next.js (TypeScript)
- Static export hosted on AWS S3
- Served via CloudFront CDN
- Custom domain via Route 53

### Backend (General Service)

- Node.js + Express + TypeScript
- Deployed as AWS Lambda
- Exposed via API Gateway
- Supabase (PostgreSQL) for persistence

### Infrastructure

- AWS: S3, CloudFront, Lambda, API Gateway
- Terraform (IaC)
- GitHub Actions (CI/CD)

