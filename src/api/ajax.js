/**
 * 二次封装axios
 */
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const service = axios.create({
    baseURL:'/api',
    timeout:20000,
})

service.interceptors.request.use(
    (config) => {
        NProgress.start();
        return config
    }
)

service.interceptors.response.use(
    (response) => {
        NProgress.done();
        return response.data
    },
    (error) => {
        NProgress.done();
        alert('发送ajax请求失败' + error.message || '未知错误😯' )
        return Promise.reject(new Error('发送请求失败😥😥😥'))
    }
)


export default service