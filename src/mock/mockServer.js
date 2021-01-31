/**
 * 模拟mock数据接口文件
 */

import Mock from 'mockjs';
import banner from './banner.json'
import floor from '@/mock/floor'



/**
 * 模拟数据接口
 * 一参：请求路径
 * 二参：请求数据
 */
 Mock.mock('/mock/banner',{code:200,data:banner})
 Mock.mock('/mock/floor',{code:200,data:floor})