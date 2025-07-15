FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install npm globally with latest version
RUN npm install -g npm@10

# Set environment variables for Czech locale
ENV NODE_ENV=production
ENV LANG=cs_CZ.UTF-8
ENV LANGUAGE=cs_CZ:en
ENV LC_ALL=cs_CZ.UTF-8

# Copy package files first for better caching
COPY package*.json ./

# Copy all necessary project files
COPY packages ./packages
COPY extensions ./extensions
COPY config ./config
COPY translations ./translations
COPY scripts ./scripts

# Copy optional directories
COPY themes ./themes
COPY public ./public
COPY media ./media

# Install dependencies and PostgreSQL client for health checks
RUN apk add --no-cache postgresql-client && \
  npm install --no-audit --no-fund --ignore-scripts

# Compile TypeScript and build the application
RUN npm run compile && npm run build && \
  npm prune --omit=dev

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S evershop -u 1001

# Make scripts executable and change ownership
RUN chmod +x /app/scripts/wait-for-db.sh && \
  chown -R evershop:nodejs /app
USER evershop

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node /app/scripts/healthcheck.js

# Start the application with database wait
CMD ["./scripts/wait-for-db.sh", "database", "npm", "run", "start"]
