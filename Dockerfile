# --- Build stage ---
  FROM node:22-bookworm-slim AS build
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci
  COPY . .
  RUN npm run build
  
  # --- Runtime stage (Caddy, non-root) ---
  FROM caddy:2-bookworm
  # App files
  COPY --from=build /app/dist /srv
  
  # Caddy config + entrypoint
  COPY Caddyfile /etc/caddy/Caddyfile
  COPY entrypoint.sh /usr/local/bin/entrypoint.sh
  RUN chmod +x /usr/local/bin/entrypoint.sh
  
  ENV PORT=8080
  EXPOSE 8080
  CMD ["/usr/local/bin/entrypoint.sh"]
  