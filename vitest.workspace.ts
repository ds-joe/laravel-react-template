import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'packages/*',
  {
    extends: './vite.config.js',
    test: {
      include: ['./resources/react/**/*.test.{tsx,ts}'],
      environment: 'jsdom',
    }
  },
  {
    test: {
      include: ['./resources/react/**/*.test.{tsx,ts}'],
      environment: 'jsdom',
    }
  }
]);
