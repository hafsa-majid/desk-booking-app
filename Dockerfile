# --- Stage 1: Build & Dependencies ---
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
# Use npm ci for consistent, reproducible builds in CI/CD
RUN npm ci

# --- Stage 2: Final Production Image ---
FROM node:18-alpine
WORKDIR /app

# Only copy the production dependencies and source code
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# ✅ Security: Run as a non-privileged user (LO3 Safety)
USER node

EXPOSE 3000

# Use NODE_ENV to optimize Express for production
ENV NODE_ENV=production

CMD ["node", "server.js"]