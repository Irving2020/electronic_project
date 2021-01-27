import {reqCategoryList} from '@/api'

/**
 * 存放数据
 */
const state = {
    categoryList:[]
}

/**
 * 修改数据
 */
const mutations = {
RECEIVE_CATEGORYLIST(state,categoryList){
    state.categoryList = categoryList
    }
}

/**
 * 提交mutations,与组件对接
 */
const actions = {
    async getCategoryList({commit}){
        const result = await reqCategoryList()
        if(result.code === 200){
        commit('RECEIVE_CATEGORYLIST',result.data)
    }
    }
}

/**
 * 简化数据操作     
 */
const getters = {
  
}

export default {
    state,
    mutations,
    getters,
    actions,
    /**
     * 模块化开发
     */
}