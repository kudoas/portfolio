/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import { playwright } from '@vitest/browser-playwright';

import viteTsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isTest = mode === 'test';
  const enableBrowserTesting = process.env.VITEST_BROWSER === 'true';
  return {
    root: __dirname,
    cacheDir: './node_modules/.vite',
    build: {
      outDir: './dist/./client',
      reportCompressedSize: true,
      target: ['es2020'],
    },
    plugins: [
      !isTest &&
        analog({
          ssr: false,
          static: false,
          prerender: {
            routes: [],
          },
          nitro: {
            preset: 'vercel',
          },
        }),
      viteTsConfigPaths(),
    ].filter(Boolean),
    server: {
      fs: {
        allow: ['.'],
      },
    },
    test: {
      globals: true,
      setupFiles: ['src/setup-vitest.ts'],
      include: ['src/**/*.spec.ts'],
      environment: 'jsdom',
      coverage: {
        provider: 'istanbul',
        include: ['src/**/*.ts'],
        exclude: ['src/main.ts'],
      },
      browser: {
        instances: [
          {
            browser: 'chromium',
            setupFiles: ['src/setup-vitest.ts'],
          },
        ],
        provider: playwright,
        enabled: enableBrowserTesting,
        headless: true,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
