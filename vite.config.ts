import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // If you used Webpack aliases like '@', map them here:
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'build', // Changes output from 'dist' to match Webpack's default
  }
})