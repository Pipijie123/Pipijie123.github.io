import { reqCategoryList } from "@/api";
import { reqGetBannerList } from "@/api";
import { reqGetFloorList} from "@/api"

const state={
    categoryList:[],
    bannerList:[],
    floorList:[]
};
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList
    }
};
const actions={
    async categoryList({commit}){//commit适用于传递多个参数，commit('mutations方法名',参数1,参数2....)由于这里的result返回的是一个数组对象
        let result=await reqCategoryList()
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
    },
    async getBannerList({commit}){
        let result= await reqGetBannerList();
        if(result.code==200){
            commit("GETBANNERLIST",result.data)
        }
    },
    //获取floor数组
    async getFloorList({commit}){
        let result =await reqGetFloorList();
        if(result.code==200){
            commit("GETFLOORLIST",result.data)

        }
    }
};
const getters={}
export default{
    state,
    mutations,
    actions,
    getters
}