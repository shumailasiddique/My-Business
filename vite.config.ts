import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      manifest: {
        name: 'My Awesome PWA',
        short_name: 'AwesomePWA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          { src: '/192x192.png', sizes: '192x192', type: 'image/png' },
          { src: '/512x512.png', sizes: '512x512', type: 'image/png' }
        ],
      },
    }),
  ],
});
