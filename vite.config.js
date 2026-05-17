import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ mode }) => {
  const isGithubPages = process.env.DEPLOY_TARGET === 'gh-pages';
  const basePrefix = isGithubPages ? '/olmix/' : './';
  return {
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
  };
});
