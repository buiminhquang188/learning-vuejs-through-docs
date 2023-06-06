import './assets/main.css'
import 'highlight.js/styles/github-dark.css'
import 'highlight.js/lib/common'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import hljsVuePlugin from '@highlightjs/vue-plugin'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(hljsVuePlugin)
app.use(router)

app.mount('#app')
