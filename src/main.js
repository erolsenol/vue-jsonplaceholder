import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'

import { HttpConnector } from '@/http/clients'

const app = createApp(App)

app.use(store)
app.use(vuetify)
app.use(router)

app.config.globalProperties.$httpConnector = HttpConnector

app.mount('#app')
