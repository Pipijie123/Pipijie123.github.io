import {reqCode,reqRegister,reqLogin,reqUserInfo,reqLogout} from '@/api'
import { setToken,getToken,removeToken } from '@/utils/token'
const state={
    token:getToken(),
    userInfo:{}
}
const mutations={
    USERLOGIN(state,token){
        state.token=token
    },
    GETUSERINFO(state,data){
        state.userInfo=data
    },
    USERLOGOUT(state){
        state.token='',
        state.userInfo={},
        removeToken()
    }
}
const actions={
    //获取验证码
    async getCode({commit},phone){
        let result=await reqCode(phone)
        if(result.code==200){
            alert(result.data)
        }
    },
    //注册信息验证
    async userRegister({commit},data){
        let result=await reqRegister(data)
        if(result.code==200){
            return "ok"
        }else{
            return Promise.reject(new Error(result.message))
        }
    },
    //登录信息验证
    async userLogin({commit},data){
        let result=await reqLogin(data)
        if(result.code==200){
            commit("USERLOGIN",result.data.token)
            setToken(result.data.token)
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //通过token获取用户购物信息
    async userInfo({commit}){
        let result=await reqUserInfo()
        if(result.code==200){
            commit("GETUSERINFO",result.data)
        }else{
            return "no"
        }
    },
    async userLogout({commit}){
        let result=await reqLogout()
        if(result.code==200){
            commit("USERLOGOUT")
            return "ok"
        }else{
            return Promis.reject(new Error("faile"))
        }
    }
}
const getters={

}
export default{
    state,
    mutations,
    actions,
    getters
}
