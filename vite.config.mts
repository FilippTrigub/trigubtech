import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      'import.meta.env.FOOBAR': JSON.stringify(env.FOOBAR),
      'import.meta.env.NEXT_PUBLIC_FOOBAR': JSON.stringify(env.NEXT_PUBLIC_FOOBAR),
    },
  }
})
