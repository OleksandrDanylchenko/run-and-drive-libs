import path, { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import { peerDependencies, dependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://dev.to/glocore/configure-emotion-with-your-vite-react-project-7jl
    react({
      /**
       * This will generate bloated code in the form of jsx-runtime by default.
       * As a library, we probably don't see much benefit in jsx-runtime style output,
       * so we'll change to classic style output.
       */
      jsxRuntime: 'classic',
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@redux': path.resolve(__dirname, './src/redux'),
      '@navigation': path.resolve(__dirname, './src/navigation'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@models': path.resolve(__dirname, './src/models'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`,
      // for UMD name: 'GlobalName'
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
    },
    target: 'esnext',
    sourcemap: true,
    emptyOutDir: false,
  },
});
