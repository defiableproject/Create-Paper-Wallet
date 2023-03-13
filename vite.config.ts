import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        assetsDir: '',
        minify: false,
    },
    plugins: [ react(), viteSingleFile(), svgr() ],
    resolve: {
        alias: {
            '@': '/src/',
        },
    },
});
