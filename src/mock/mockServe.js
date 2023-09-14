//引入mockjs模块
import Mock from 'mockjs'
//json文件会默认暴露
import banner from './banner.json'
import floor from './floor.json'

//参数一：地址，参数二：请求数据
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/floor',{code:200,data:floor})