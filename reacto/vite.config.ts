import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "manifest.json",
          dest: './',
        },
        {
          src: "src/background.js",
          dest: "./",
        },
      ],
    }),
  ],
    build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        options: 'options.html',
      },
    },
  },
})

