import { defineConfig } from 'vite';
import cssnanoPlugin from 'cssnano';
import { visualizer } from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import imagemin from 'vite-plugin-imagemin';
import fs from 'fs';


export default defineConfig({
  plugins: [
    cssnanoPlugin(),
    visualizer({
      open: true, 
      gzipSize: true,
      brotliSize: true,
    }), 
    terser(),
    imagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
      webp: {
        quality: 75,
      },
    }),
  ],
    server: {
      https: {
        key: fs.readFileSync('./localhost+2-key.pem'),
        cert: fs.readFileSync('./localhost+2.pem'), 
  },
    },
    root: '.', 
    build: {
      outDir: 'dist',
    },
  });