import type { App } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"

// 创建路由实例
export const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:"/",
            component: () => import("@/views/index/index.vue"),
        }
    ]
})

// 初始路由
export function initRouter(app: App<Element>): void{
    app.use(router)
}