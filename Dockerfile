# Build stage for React client
FROM node:16-alpine AS client-build
WORKDIR /app/client
COPY client/package*.json ./
RUN npm ci
COPY client/ ./
RUN npm run build

# Build stage for Node.js server
FROM node:16-alpine AS server-build
WORKDIR /app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm ci --ignore-scripts
COPY src/ ./src/
RUN npm run build:server

# Production dependencies stage
FROM node:16-alpine AS prod-deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts

# Production stage
FROM node:16-alpine
WORKDIR /app

# Copy production dependencies and built files
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=server-build /app/dist ./dist
COPY --from=server-build /app/package.json ./package.json

# Copy database migration script and init SQL
COPY scripts/ ./scripts/
COPY db/ ./db/

# Copy client build
COPY --from=client-build /app/client/build ./client/build

# Expose port
EXPOSE 8080

# Run migrations and start server
CMD ["sh", "-c", "node scripts/migrate-db.js && node dist/server.js"]
