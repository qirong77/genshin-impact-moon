import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
export default defineConfig({
    base: '/genshin-impact-moon/',
    plugins: [
        ViteImageOptimizer({
            /* pass your config */
        }),
    ],
    resolve: {
        alias: [
            { find: '@', replacement: resolve(__dirname, 'src') },
            { find: '@assets', replacement: resolve(__dirname, 'public/assets') },
            { find: '@common', replacement: resolve(__dirname, 'src/common') },
        ],
    },
});
