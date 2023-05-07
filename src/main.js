import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'

const app = createApp(App)

app.use(store)
app.use(vuetify)
app.use(router)

app.mount('#app')
