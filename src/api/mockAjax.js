import axios from "axios";

//引入进度条
import nProgress from "nprogress";

//引入进度条样式
import 'nprogress/nprogress.css'



const requests=axios.create({
    //配置对象

    //baseURL基于某个路径，发请求事，路径会出现api
    baseURL:"/mock",
    //超时事件
    timeout:5000
});

//请求拦截器
 requests.interceptors.request.use((config)=>{

   //进度条开始
   nProgress.start()
    return config
 })

 //响应拦截器
 requests.interceptors.response.use((res)=>{
   //进度条结束
   nProgress.done()
    return res.data//成功的回调函数
 },(error)=>{
    console.log('服务器响应失败')
 })


export default requests