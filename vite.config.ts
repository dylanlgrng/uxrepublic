import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: this makes the app work at https://dylanlagrange.fr/uxrepublic/
export default defineConfig({
  plugins: [react()],
  base: '/uxrepublic/',
})
