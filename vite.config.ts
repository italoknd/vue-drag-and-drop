import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ReactivityTransform from '@vue-macros/reactivity-transform/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
  vue(),
  ReactivityTransform(),
  AutoImport({
    imports: [
      'vue',
      'vue/macros',
    ],
    dts: true,
    dirs: ['src/**']
  }),
  Components({
    dts: true,
  })]

})
