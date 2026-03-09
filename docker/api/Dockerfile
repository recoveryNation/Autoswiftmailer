# docker/api/Dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

FROM node:18-alpine AS build
WORKDIR /app
COPY . .
# Install dev dependencies if needed for ts-node or builds
RUN npm install
# If you have a build step (transpile to JS), add it here.
# Example: RUN npm run --workspace api build
RUN npm install -g ts-node typescript

FROM node:18-alpine AS runtime
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/apps/api ./apps/api
EXPOSE 4000
WORKDIR /app/apps/api
CMD ["npx", "ts-node", "src/server.ts"]