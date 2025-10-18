import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.scss";

function loadRuntimeConfig() {
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = "/config.js"; // served from /public in dev
    s.async = true;
    s.onload = () => resolve(true);
    s.onerror = () => {
      console.warn("Failed to load /config.js (continuing with defaults).");
      resolve(false);
    };
    document.head.appendChild(s);
  });
}

(async function start() {
  await loadRuntimeConfig();
  const rootEl = document.getElementById("root");
  if (!rootEl) {
    console.error('Missing <div id="root"></div> in index.html');
    return;
  }
  const root = createRoot(rootEl);
  root.render(<App />);
})();
