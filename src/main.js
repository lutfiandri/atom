import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Routes from './routes'
import { store } from '@/store/store'

// ROUTER

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
