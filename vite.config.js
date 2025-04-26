import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    allowedHosts: [
      '7dd5-2409-40e3-3000-c1cc-3899-8b3f-b391-a291.ngrok-free.app'
    ]
  }
})
