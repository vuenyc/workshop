import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles.css'

Vue.use(ElementUI)

Vue.filter('allCaps', str => str.toUpperCase())

new Vue({
  el: '#app',
  render: createElement => createElement(App)
})
