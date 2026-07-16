import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path must match the GitHub Pages URL for this repo:
//   https://dandao0806.github.io/playground-variation-a-share/
// Without it, all built asset URLs (/assets/*, /icons/*) would 404.
export default defineConfig({
  base: '/playground-variation-a-share/',
  plugins: [react()],
  server: { port: 5173, open: true },
})
