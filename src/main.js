import App from './App.vue'
import store from './store'
import router from './router'
import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


const app = Vue.createApp(App);
app.use(store);
app.use(router)
app.use(VueAxios, axios)
app.mount("#app");
