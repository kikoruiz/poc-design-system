import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@docs',
        replacement: path.resolve(__dirname, './docs'),
      },
      {
        find: '@devtools',
        replacement: path.resolve(__dirname, './src/devtools'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components'),
      },
    ],
  },
})
