import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes";
import store from '@/store';
Vue.use(VueRouter)



let router= new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition) {
        return{y:0}
    }
})
router.beforeEach(async(to,from,next)=>{
    let name=store.state.register.userInfo.name
    if(store.state.register.token){
        if(to.path=='/login'||to.path=='/register'){
            next('/')
        }else{
            if(name){
                next()
            }else{
                try{
                    await store.dispatch("userInfo")
                    next()
                }catch(error){
                    await store.dispatch("userLogout")
                    next("/login")
                }
            }
        }
    }else{
        //未登录：不能去交易相关、不能去支付相关【pay|paysuccess】、不能去个人中心
        //未登录去上面这些路由-----登录
        let toPath = to.path;
        if(toPath.indexOf('/trade')!=-1 || toPath.indexOf('/pay')!=-1||toPath.indexOf('/center')!=-1){
          //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
          next('/login?redirect='+toPath);
        }else{
           //去的不是上面这些路由（home|search|shopCart）---放行
           next();
        }
      
     }
})



export default router