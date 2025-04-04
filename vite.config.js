import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3003', // Your backend server URL
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
});
