import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
// これを追加！「相対パス」で書き出す設定です
  base: '',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // Dockerからアクセスするために必要
    watch: {
      usePolling: true, // WSL2環境でのホットリロード安定化
    },
  },
})