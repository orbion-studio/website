import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["64d9d41c2df9.ngrok-free.app"],
    },
  },
  devToolbar: {
    enabled: false,
  },
});
