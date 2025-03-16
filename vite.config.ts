/// <reference types="vitest" />

import { defineConfig } from 'vite';
import swc from 'unplugin-swc';
import { swcAngularUnpluginOptions } from '@jscutlery/swc-angular';
import analog from '@analogjs/platform';

import viteTsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    cacheDir: './node_modules/.vite',
    build: {
      outDir: './dist/./client',
      reportCompressedSize: true,
      target: ['es2020'],
    },
    plugins: [
      analog({
        ssr: false,
        static: false,
        prerender: {
          routes: [],
        },
        nitro: {
          preset: 'vercel'
        }
      }),
      viteTsConfigPaths(),
      swc.vite(swcAngularUnpluginOptions())
    ],
    server: {
      fs: {
        allow: ['.'],
      },
    },
    test: {
      globals: true,
      setupFiles: ['src/setup-vitest.ts'],
      include: ['src/**/*.spec.ts'],
      coverage: {
        provider: 'istanbul',
        include: ['src/**/*.ts'],
        exclude: ['src/main.ts'],
      },
      browser: {
        instances: [
          {
            browser: 'chromium',
          },
        ],
        provider: 'playwright',
        enabled: true,
        headless: true,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
