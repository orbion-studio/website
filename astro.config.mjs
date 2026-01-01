import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://orbion.studio/",
  compressHTML: true,
  integrations: [
    react(),
    sitemap(),
  ],
  vite: {
    build: {
      minify: true,
      cssMinify: "lightningcss",
    },
    plugins: [
      tailwindcss({
        optimize: {
          minify: true,
        }
      })
    ],
  },
  devToolbar: {
    enabled: false,
  },
});
