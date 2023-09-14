import { reqGetSearchInfo } from "@/api";

const state={
    searchList:{}
};
const mutations={
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList
    }
};
const actions={
    async getSearchList({commit},params={}){
        //至少传递一个参数
        let result= await reqGetSearchInfo(params)
        // console.log(result)
        if(result.code==200){
            commit("GETSEARCHLIST",result.data)
        }
    }
};
//项目中getter用于简化仓库中的数据
const getters={
    //当前形参state是当前仓库里的state，而不是大仓库里的state
    goodsList(state){
        return state.searchList.goodsList||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList||[]
    },
    attrsList(state){
        return state.searchList.attrsList||[]
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}