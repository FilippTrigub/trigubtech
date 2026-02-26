# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Install gettext for envsubst
RUN apk add --no-cache gettext

# Create entrypoint script that properly sets PORT and starts nginx
RUN printf '#!/bin/sh\n\
set -e\n\
export PORT=${PORT:-8080}\n\
echo "Starting nginx on port $PORT"\n\
envsubst '"'"'$PORT'"'"' < /etc/nginx/conf.d/default.conf > /tmp/nginx.conf\n\
mv /tmp/nginx.conf /etc/nginx/conf.d/default.conf\n\
echo "Nginx configuration:"\n\
cat /etc/nginx/conf.d/default.conf\n\
echo "Testing nginx configuration..."\n\
nginx -t\n\
echo "Starting nginx..."\n\
exec nginx -g "daemon off;"\n' > /docker-entrypoint.sh && \
    chmod +x /docker-entrypoint.sh

EXPOSE 8080

ENTRYPOINT ["/docker-entrypoint.sh"]
