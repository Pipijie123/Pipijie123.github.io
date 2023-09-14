import {reqAddressInfo,reqOrderInfo} from "../../api/index"
const state={
    address:[],
    orderInfo:{}
}
const mutations={
    GETADDRESSINFO(state,address){
        state.address=address
    },
    GETORDERINFO(state,orderInfo){
        state.orderInfo=orderInfo
    }
}
const actions={
    async getAddressInfo({commit}){
        let result=await reqAddressInfo()
        if(result.code==200){
            commit("GETADDRESSINFO",result.data)
            return "ok"
        }else{
            return Promise.reject(new Error("faile"))
        }
    },
    async getOrderInfo({commit}){
        let result=await reqOrderInfo()
        console.log(result)
        if(result.code==200){
            commit("GETORDERINFO",result.data)
            return "ok"
        }else{
            return Promise.reject(new Error("faile"))
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