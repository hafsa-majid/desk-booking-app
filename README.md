# Desk Booking App – CI/CD Pipeline Project

## Overview
This project is a **Node.js-based Desk Booking App prototype** developed as part of a university assignment to demonstrate **modern DevOps and CI/CD practices**.  

The focus of the project is not application features, but:
- Continuous Integration (CI)
- Automated Testing
- Security Scanning
- Containerisation with Docker
- Automated Deployment to Cloud (Render)
- Infrastructure as Code (IaC)

---

## Tech Stack
- **Node.js (Express)**
- **Jest & Supertest** – automated testing
- **Docker** – containerisation
- **GitHub Actions** – CI/CD pipeline
- **Render** – cloud hosting (staging & production)
- **Trivy** – vulnerability scanning
- **CycloneDX** – Software Bill of Materials (SBOM)

---

## Project Structure
desk-booking-app/
├── .github/workflows/ci.yml # CI/CD pipeline
├── tests/ # Automated tests
│ └── app.test.js
├── Dockerfile # Docker container configuration
├── render.yml # Infrastructure as Code (Render)
├── server.js # Application server
├── package.json
├── package-lock.json
└── README.md

yaml
Copy code

---

## Application Behaviour

### Health Check Endpoint
The application exposes a health endpoint used by:
- CI/CD health checks
- Render deployment verification

GET /health

css
Copy code

Example response:
```json
{
  "status": "ok",
  "message": "Desk Booking App is healthy"
}
Automated Testing
The project includes automated tests using Jest and Supertest:

Health endpoint returns HTTP 200

Unknown routes return HTTP 404 (error handling test)

Tests are run automatically during the CI pipeline.

Coverage reporting is enabled and uploaded as a CI artifact.

CI/CD Pipeline (GitHub Actions)
The pipeline is defined in .github/workflows/ci.yml and includes:

1. Code Quality Checks
Dependency installation

Linting and formatting checks

NPM security audit

2. Automated Testing & Coverage
Unit and integration tests

Coverage report generation

Coverage artifacts uploaded to GitHub

3. Build & Containerisation
Application build step

Docker image creation

Software Bill of Materials (SBOM) generation

4. Security Scanning
Trivy filesystem vulnerability scan

SARIF upload to GitHub Security tab

Dependency vulnerability analysis

5. Staging Deployment
Triggered automatically on develop branch

Deployed to Render staging environment

Health check verification after deployment

6. Production Deployment
Triggered automatically on main branch

Deployed to Render production environment

Post-deployment health verification

Infrastructure as Code (Render)
The render.yml file defines:

Separate staging and production services

Docker-based deployments

Health check paths

Environment variables

Automatic deployment on GitHub push

This ensures consistent and reproducible infrastructure setup.

Rollback Strategy (Design Explanation)
If a deployment fails at any stage:

Staging failure:
Deployment stops automatically; production is not affected.

Production failure:
Render allows redeployment of the previous successful version via the dashboard.
Typical rollback time: 1–2 minutes.

This approach reduces risk and ensures stability.

Security Considerations
Dependencies are audited during CI

Container vulnerabilities are scanned using Trivy

SBOM is generated for transparency and compliance

Results are stored as pipeline artifacts

Deployment URLs
Staging:
https://desk-booking-app-staging.onrender.com

Production:
https://desk-booking-app-y02r.onrender.com

Author
Hafsa Majid
