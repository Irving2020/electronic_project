import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/css/swiper.css'
import '@/mock/mockServer' 
// import '@/api'
import TypeNav from './components/TypeNav'
import SlideLoop from  '@/components/SlideLoop'
import Pagination from '@/components/Pagination'

Vue.config.productionTip = false
Vue.component('TypeNav',TypeNav)
Vue.component('SlideLoop',SlideLoop)
Vue.component('Pagination',Pagination)

new Vue({
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  el:'#app',
  render:h => h(App),
  router,
  store
})
