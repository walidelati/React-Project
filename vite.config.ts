import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configurazione di Vite
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
  build: {
    sourcemap: false, // Disabilita i sourcemaps se non necessari
  }
});
