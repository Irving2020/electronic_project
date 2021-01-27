import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import user from './user'
import home from './home'

/**
 * 存放数据
 */
const state = {

}

/**
 * 修改数据
 */
const mutations = {

}

/**
 * 提交mutations
 */
const actions = {

}

/**
 * 简化数据操作     
 */
const getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
      user,
      home
    }
  })