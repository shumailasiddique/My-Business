import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        id: "/",
        name: "My | Business",
        short_name: "Xavier",
        description: "My | Business Dashboard",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        orientation: "any",
        display_override: ["window-controls-overlay"],
        protocol_handlers: [
          {
            protocol: "web+xavier",
            url: "/?action=%s",
          },
        ],
        icons: [
          {
            src: "/icons/xavier-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/xavier-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "/screenshots/desktop-screenshot.png",
            sizes: "1280x800",
            type: "image/png",
            form_factor: "wide",
          },
          {
            src: "/screenshots/mobile-screenshot.png",
            sizes: "375x667",
            type: "image/png",
            form_factor: "narrow",
          },
        ],
      },
    }),
  ],
});
