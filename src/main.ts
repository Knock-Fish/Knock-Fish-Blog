import { createApp } from 'vue'
import { initStore } from "./store"                 // Store
import { initRouter } from "./router"               // Router
import "virtual:svg-icons-register";
import SvgIcon from "@comps/svgIcon/index.vue"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import '@styles/reset.scss'                         // 重置HTML样式
import "@fonts/index.scss"                          // 引入字体库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
const app = createApp(App)
initRouter(app)
initStore(app)
app.component("svg-icon", SvgIcon)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus, {
    locale:zhCn
})
app.mount('#app')
