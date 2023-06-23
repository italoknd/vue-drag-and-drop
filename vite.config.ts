import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  vue({
    reactivityTransform: true
  }),
  AutoImport({
    imports: [
      'vue'
    ],
    dts: true,
    dirs: ['src/**']
  }),
  Components({
    dts: true,
  })]

})
