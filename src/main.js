import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles.css'
import App from './App.vue'

Vue.use(ElementUI, { locale })

new Vue({
  el: '#app',
  render: createElement => createElement(App)
})
