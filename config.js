// Reads runtime values written by entrypoint.sh into /config.js
export const config = {
  API_URL: (window.__APP_CONFIG__ && window.__APP_CONFIG__.API_URL) || "",
  API_TOKEN: (window.__APP_CONFIG__ && window.__APP_CONFIG__.API_TOKEN) || ""
};
