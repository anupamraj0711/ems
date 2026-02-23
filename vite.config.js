import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    host: true,       // Important for Docker
    port: 5173,       // Explicit port
    strictPort: true  // Fail if port busy
  }
})