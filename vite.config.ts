import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: `@import "src/styles/global.scss";`,
        },
    },
},
server: {
  proxy: {
    "/api": {
      target: "https://arbeitnow.com/api",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
},
})


