import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import {createPinia} from 'pinia'
import './assets/iconfont/iconfont.css'
let app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
