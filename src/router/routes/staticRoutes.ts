import { type RouteRecordRaw } from 'vue-router'
/**
 * 静态路由配置
 */
export const staticRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'index',
        component: () => import("@views/index/index.vue"),
        children: [
            {
                path: '/home',
                name: 'Home',
                component: () => import("@views/home/index.vue"),
                meta: { title: "首页", icon: "House" }
            },
            {
                path: '/link',
                name: 'Link',
                component: () => import("@views/link/index.vue"),
                meta: { title: "友链", icon: "Link" }
            },
            {
                path: '/archive',
                name: 'Archive',
                component: () => import("@views/archive/index.vue"),
                meta: { title: "归档", icon: "Files" }
            },
            {
                path: '/navigation',
                name: 'Navigation',
                component: () => import("@views/navigation/index.vue"),
                meta: { title: "导航", icon: "Position" }
            },
            {
                path: '/about',
                name: 'About',
                component: () => import("@views/about/index.vue"),
                meta: { title: "关于", icon: "WarningFille" }
            }
        ]
    }
]