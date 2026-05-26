import { createApp } from 'vue'
// 引入 pinia
import { createPinia } from 'pinia'
// 引入 pinia持久化
// https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/config.html
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.mount('#app')