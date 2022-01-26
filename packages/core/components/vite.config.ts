import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'CoreComponents',
      fileName: format => `components.${format}.js`,
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled into the library
      external: ['vue'],
      output: {
        // provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [tsconfigPaths(), vue()],
});
