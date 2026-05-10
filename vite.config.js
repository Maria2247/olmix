import { defineConfig } from 'vite';

export default defineConfig({
  base: '/olmix/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
