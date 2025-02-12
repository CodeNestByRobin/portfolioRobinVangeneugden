import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import netlifyPlugin from "@netlify/vite-plugin-react-router";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      netlifyPlugin()
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },

})
