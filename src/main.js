import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n'

Vue.use(VueI18n)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  VueI18n,
  i18n,
  render: h => h(App)
}).$mount('#app')
