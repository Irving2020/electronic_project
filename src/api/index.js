/**
 * 接口请求函数
 */
import axios from 'axios'
import request from './ajax'


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