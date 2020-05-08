import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import tailwind from '@/assets/css/tailwind.css'
import { dollarFilter, percentFilter } from '@/filters'
import Chart from 'chart.js'
import Chartick from 'vue-chartkick'
import { VueSpinners } from '@saeris/vue-spinners'

Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))
Vue.filter('percent', percentFilter)
Vue.filter('dollar', dollarFilter)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  tailwind,

  render: h => h(App)
}).$mount('#app')
