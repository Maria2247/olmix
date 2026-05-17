import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: './',
  build: {
    rolldownOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        english: path.resolve(__dirname, 'en/index.html'),
      },
    },
    outDir: 'dist',
    sourcemap: true,
  },
});
