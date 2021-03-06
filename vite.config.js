import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 12312,
    proxy: {
      "/api": "http://localhost:5000"       
    },  
  },
  base: '/car-workshop-frontend/'
})
