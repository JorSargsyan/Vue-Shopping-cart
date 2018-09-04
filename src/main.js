import Vue from 'vue'
import App from './app/App'
import store from './app/store'
import router from "./app/router"


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
