import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    open: true,
  },
  assetsInclude: ['**/*.png', '**/*.PNG'] // Include both lowercase and uppercase extensions

});