/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { swcAngularUnpluginOptions } from '@jscutlery/swc-angular';
import swc from 'unplugin-swc';

export default defineConfig({
  plugins: [swc.vite(swcAngularUnpluginOptions())],
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
