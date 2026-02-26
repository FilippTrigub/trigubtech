import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    'import.meta.env.VITE_FOOBAR': JSON.stringify(process.env.FOOBAR),
    'import.meta.env.VITE_NEXT_PUBLIC_FOOBAR': JSON.stringify(process.env.NEXT_PUBLIC_FOOBAR),
  },
})
