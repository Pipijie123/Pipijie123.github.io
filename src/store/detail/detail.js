import { reqGoodsInfo } from "@/api"
import {reqAddOrUpdateShopCart} from '@/api'
import {getUUID} from '../../utils/uuid_token'
const state={
    goodInfo:{},
    uuid_tooken:getUUID()
}
const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo=goodInfo
    }
}
const actions={
    async getGoodInfo({commit},skuId){
        let result= await reqGoodsInfo(skuId)
        if(result.code==200){
            commit("GETGOODINFO",result.data)
        }
    },
    //此处不需要三连环,仓库中不需要存储
    //因为服务器里面没有数据，只是返回了code=200
    async AddOrUpdateShopCart({commit},{skuId,skuNum}){
        let result=await reqAddOrUpdateShopCart(skuId,skuNum)
        if (result.code == 200) {
            //返回的是成功的标记
            return "ok";
          } else {
            //返回的是失败的标记
            return Promise.reject(new Error("faile"));
          }

    }
}
const getters={
    categoryView(state){
        return state.goodInfo.categoryView||{}
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[];
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}