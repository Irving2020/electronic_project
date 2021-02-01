/**
 * 接口请求函数
 */
import axios from 'axios'
import request from './ajax'
import mockAjax from '@/api/mockAjax'


/**
 * 
 * axios三种参数：params(路径中携带) 
 * query(路径中问号分割或配置对象中,属性名为params) 
 * 请求体参数(配置对象中data配置,请求方式是put和post才有请求体参数)
 * 
 */



export const reqCategoryList = () => {
    return request({
        url:'/product/getBaseCategoryList',
        method:'get'
    })
}

export const reqBannerList = () => {
    return mockAjax({
        url:'/banner',
        method:'get'
    })
}

export const reqFloorList = () => {
    return mockAjax({
        url:'/floor',
        method:'get'
    })
}

export const reqSearchInfo = (searchParams) => {
    return request({
        url:'/list',
        methodL:'post',
        data:searchParams
    })
}