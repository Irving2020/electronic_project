import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/css/swiper.css'
import '@/mock/mockServer' 
// import '@/api'
import TypeNav from './components/TypeNav'
import SlideLoop from  '@/components/SlideLoop'

Vue.config.productionTip = false
Vue.component('TypeNav',TypeNav)
Vue.component('SlideLoop',SlideLoop)

new Vue({
  el:'#app',
  render:h => h(App),
  router,
  store
})
