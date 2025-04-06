import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/genshin-impact-moon/',
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@assets', replacement: resolve(__dirname, 'public/assets') },
      { find: '@common', replacement: resolve(__dirname, 'src/common') },
    ],
  },
})