import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        'C:/Users/ACER/OneDrive/Desktop/Web 2',
        'C:/Users/ACER/.gemini/antigravity/brain/a1a8a58c-1d4c-4a68-973b-96336d2d9fb1/.user_uploaded/'
      ]
    }
  }
})
