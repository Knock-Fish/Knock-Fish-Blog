import type { App } from "vue"
import { staticRoutes } from "./routes/staticRoutes"
import { createRouter, createWebHashHistory } from "vue-router"

// 创建路由实例
export const router = createRouter({
    history: createWebHashHistory(),
    routes: staticRoutes
})

// 初始路由
export function initRouter(app: App<Element>): void{
    app.use(router)
}