import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '@/api'
import {reqCategoryList} from '@/api'
reqCategoryList()
import TypeNav from './components/TypeNav'

Vue.config.productionTip = false
Vue.component('TypeNav',TypeNav)

new Vue({
  el:'#app',
  render:h => h(App),
  router,
  store
})
