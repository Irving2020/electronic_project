import {reqCategoryList,reqBannerList,reqFloorList} from '@/api'

/**
 * 存放数据
 */
const state = {
    categoryList:[],
    bannerList:[],
    floorList:[],
}

/**
 * 修改数据
 */
const mutations = {
    RECEIVE_CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    RECEIVE_BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    RECEIVE_FLOORLIST(state,floorList){
        state.floorList = floorList
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
    },
    async getBannerList({commit}){
        const result = await reqBannerList()
        if(result.code === 200){
        commit('RECEIVE_BANNERLIST',result.data)
    }
    },
    async getFloorList({commit}){
        const result = await reqFloorList()
        if(result.code === 200){
        commit('RECEIVE_FLOORLIST',result.data)
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