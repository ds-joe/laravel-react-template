import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/react/App.tsx'],
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      // @ts-ignore
      '@/': `${path.resolve(__dirname, './resources/react')}/`, '~/': `${path.resolve(__dirname, './public')}/`,
    }
  },
});
