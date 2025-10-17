#!/bin/sh
set -e


cat > /srv/config.js <<EOF
window.__APP_CONFIG__ = {
  API_URL: "${API_URL:-""}",
  API_TOKEN: "${API_TOKEN:-""}"
};
EOF

exec caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
