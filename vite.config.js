import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        education: resolve(__dirname, 'education.html'),
        experience: resolve(__dirname, 'experience.html'),
        projects: resolve(__dirname, 'projects.html'),
      },
    },
  },
});
