import type { App } from "vue"
import { createPinia } from "pinia"
// import { createPersistedState } from 'pinia-plugin-persistedstate'

export const store = createPinia()

// TODO 配置持久化插件


/**
 * 初始化 Store
 */
export function initStore(app: App<Element>): void {
  app.use(store)
}