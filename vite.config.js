import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from "path";

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
  resolve: {
    alias: {
      find: /^@material-ui\/styles(.*)$/,
      replacement: resolve(__dirname, '.node_modules/@material-ui/styles/index.js'),
    }
  }
});
