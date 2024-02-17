import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // proxy added to simulate client and backend on the same port - this solves issues with cross site cookies not saving (for jwt token)
      '/api': 'http://localhost:3000',
    },
  },
});
