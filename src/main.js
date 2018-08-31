
import Vue from 'vue'
import App from './app/App'
import store from './app/store'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
