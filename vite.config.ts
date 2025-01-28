/// <reference types="vitest" />

import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular({ tsconfig: 'tsconfig.spec.json' })],
  test: {
    globals: true,
    setupFiles: ['src/setup-vitest.ts'],
    globalSetup: 'src/global-setup.ts',
    include: ['src/**/*.spec.ts'],
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.ts'],
      exclude: ['src/main.ts'],
    },
    browser: {
      instances: [
        {
          browser: 'chrome',
        },
      ],
      provider: 'webdriverio',
      enabled: true,
      headless: true,
    },
  },
});
