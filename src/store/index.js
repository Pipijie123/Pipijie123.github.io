import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

import detail from "./detail/detail";
import home from "./home";
import search from "./search";
import shopcart from "./shopcart/shopcart";
import register from "./Register";
import trade from "./trade";
//state：仓库存储数据
//mutations：修该state的唯一手段
//action：书写业务逻辑，异步处理
//getters：可以理解为计算属性

export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        shopcart,
        register,
        trade
    }
})