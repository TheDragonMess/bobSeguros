// Librarys
import path from "path";
import svgr from "vite-plugin-svgr";
import million from "million/compiler";
import react from "@vitejs/plugin-react-swc";
import { loadEnv, defineConfig } from "vite";

const DEFAULT_CORS = true; // Define cors for the server
const DEFAULT_PORT = 3000; // Define default port for the server

export default function ({ mode }) {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const PORT = process.env.VITE_PORT; // Get port from environment variables
  const CORS = process.env.VITE_CORS; // Get cors configuration
  const cors = typeof CORS === "undefined" ? DEFAULT_CORS : JSON.parse(CORS);
  const port = typeof PORT === "undefined" ? DEFAULT_PORT : JSON.parse(PORT);

  return defineConfig({
    // Configure server in Vite
    server: {
      host: "0.0.0.0",
      port: 5173
      // proxy: {
      //   "/api": {
      //     target: "http://216.128.141.187:6000",
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, "")
      //   }
      // }
    },
    // Define the plugins to use in Vite
    plugins: [svgr(), react(), million.vite({ auto: true })],

    // Resolve absolute paths
    resolve: {
      alias: {
        data: "/src/data",
        hooks: "/src/hooks",
        utils: "/src/utils",
        components: "/src/components",
        containers: "/src/containers",
        "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap")
      }
    }
  });
}
