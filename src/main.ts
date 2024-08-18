import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/index.css'  // 引入 Tailwind CSS

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
