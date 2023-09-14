import { reqCartList } from '@/api'
import {reqDeleteCartById} from '@/api'
import  {reqUpdateCheckedById} from '@/api'
const state={
    cartList:[]
}
const mutations={
    GETCARTLIST(state,cartList){
        state.cartList=cartList||[]
    }
}
const actions={
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
          commit("GETCARTLIST", result.data);
        }
      },
    async deleteCartListBySkuId({commit},skuId){
        let result1= await reqDeleteCartById(skuId)
        console.log(result1)
        if(result1.code==200){return "ok"}
        else{return Promise.reject(new Error("faile"))}
    },
    async updateCheckedById({commit},{skuId,isChecked}){
        let result=await reqUpdateCheckedById(skuId,isChecked)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    //删除选中的选项
    deleteCheckedSkuId({dispatch,getters}){
        let PromiseAll=[]
        getters.cartList.cartInfoList.forEach(item => {
            let promise=item.isChecked==1? dispatch("deleteCartListBySkuId",item.skuId):''
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll)
    },
    //全选按钮
    changeAllChecked({dispatch,getters},isChecked){
        let PromiseAll=[]
        getters.cartList.cartInfoList.forEach(item=>{
            let promise=dispatch("updateCheckedById",{skuId:item.skuId,isChecked:isChecked})
            PromiseAll.push(promise)
        })
        return Promise.all(PromiseAll)

    }
}
//获取购物车的信息
const getters={
    cartList(){
        return state.cartList[0]||[]
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}