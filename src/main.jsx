import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Load /config.js at runtime so window.__APP_CONFIG__ exists
function loadRuntimeConfig() {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "/config.js";
    s.async = true; // not a module; plain script
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load /config.js"));
    document.head.appendChild(s);
  });
}

loadRuntimeConfig()
  .catch((e) => {
    console.warn(e.message);
    // carry on without runtime config (use defaults)
  })
  .finally(() => {
    const root = createRoot(document.getElementById("root"));
    root.render(<App />);
  });
