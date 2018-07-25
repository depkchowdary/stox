import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import { routes } from './routes.js'
import { store } from './store/store.js'
Vue.use(vueRouter)

const router = new vueRouter({
  mode: 'history',
  routes,
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
