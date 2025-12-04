import {createApp} from "vue"
import App from "./App.vue"
import Router from "./Router"
import { createPinia } from "pinia"
const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(Router)
app.mount("#app")
