import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles.css'

import router from './router';

import store from './store';

Vue.use(ElementUI)

Vue.filter('toUpperCase', str => str.toUpperCase())

new Vue({
  el: '#app',
  store,
  router,
  render: createElement => createElement(App)
})
