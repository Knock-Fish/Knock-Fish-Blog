import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import vue from '@vitejs/plugin-vue'
import path from "path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(resovePath('src'), 'assets/icons')], // SVG 目录
      symbolId: 'icon-[dir]-[name]',
      // 使用vite-plugin-svg-icons去掉fill属性
      svgoOptions: {
        full: true,
        plugins: [
          {
            name: 'removeAttrs',
            params: {
              attrs: 'fill'
            }
          }
        ]
      }
    })
  ],
  server: {
    host: '0.0.0.0',
  },
  css: {
    preprocessorOptions: {
      // sass variable and mixin
      scss: {
        additionalData: `@use "@styles/variables.scss" as *; @use "@styles/mixin.scss" as *;`
      }
    }
  },
  resolve: {
    alias: {
      "@": resovePath("src"),
      "@views": resovePath("src/views"),
      "@comps": resovePath("src/components"),
      "@imgs": resovePath("src/assets/img"),
      "@icons": resovePath("src/assets/icons"),
      "@utils": resovePath("src/utils"),
      "@plugins": resovePath("src/plugins"),
      "@styles": resovePath("src/assets/styles"),
      "@fonts": resovePath("src/assets/fonts")
    }
  }
})
function resovePath(paths: string) {
  return path.resolve(__dirname, paths)
}