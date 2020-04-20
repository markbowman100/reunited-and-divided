import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { MdButton, MdContent, MdTabs, MdTooltip, MdField } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios'

Vue.prototype.$axios = axios;
Vue.use(MdField)
Vue.use(MdTooltip)
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
