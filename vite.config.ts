import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Fixes the White Page on GitHub Pages (Repo Name)
  base: mode === 'production' ? '/Pioneer-2026/' : '/',
  
  server: {
    host: "::",
    port: 8080,
    // Fixes the "Host not allowed" error for ngrok
    allowedHosts: [
      'lennox-nonpatented-apishly.ngrok-free.dev',
      'all' // Allows any future ngrok URLs as well
    ],
    hmr: {
      overlay: false,
    },
  },
  // Removed lovable-tagger to hide AI development traces
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));