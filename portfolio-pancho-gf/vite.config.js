import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { FRONTEND_URL } from '../backend/config'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/api': FRONTEND_URL
    }
  }
})

