/// <reference types="vitest" />

import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

const isCI = !!process.env['CI'];

export default defineConfig({
  plugins: [angular({ tsconfig: 'tsconfig.spec.json' })],
  test: {
    globals: true,
    setupFiles: ['src/setup-vitest.ts'],
    include: ['src/**/*.spec.ts', '@angular/cdk/testing/testbed'],
    browser: {
      name: 'chrome',
      enabled: true,
      headless: isCI,
      provider: 'webdriverio', // https://github.com/vitest-dev/vitest/issues/6804
    },
  },
});
