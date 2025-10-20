
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    jsx: 'automatic',
  }
  ),
  ],
  test: {
    environment: 'jsdom',   // <--- this is the key
    setupFiles: ['./src/setupTests.js'],
    globals: true,
  },
  server:{
    port:3000,
    proxy:{
      "/api":{
        target:"http://localhost:5000",
        changeOrigin:true
      }
    }
  }
})
