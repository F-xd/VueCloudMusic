import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: "/REPONAME/",
  plugins: [vue()],
  resolve:{
    alias:{
      '@': '/src',
      '@c': '/src/components',
      '@p': '/src/pages'
    }
  }
})
