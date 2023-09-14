import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './components/TypeNav'
import {reqCategoryList} from './api/index'
import store from './store'
import Pagination from './components/Pagination'
import { Button,MessageBox } from 'element-ui'
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name,Button)
reqCategoryList()
Vue.config.productionTip = false
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import './mock/mockServe'
import 'swiper/css/swiper.css'
import * as API from './api'
import VueLazyload from 'vue-lazyload'
import hjt from './assets/haojingtao.jpg'
import VeeValidate from 'vee-validate'
import zh_CN from "vee-validate/dist/locale/zh_CN"
Vue.use(VeeValidate)
//表单验证
VeeValidate.Validator.localize("zh_CN", {
  messages: {
    ...zh_CN.messages,
    is: (field) => `${field}必须与密码相同`, // 修改内置规则的 message，让确认密码和密码相同
  },
  attributes: {
    phone: "手机号",
    code: "验证码",
    password: "密码",
    password1: "确认密码",
    agree:'协议'
  },
});
VeeValidate.Validator.extend("agree", {
  validate: (value) => {
    return value;
  },
  getMessage: (field) => field + "必须同意",
});
Vue.use(VueLazyload,{
  //懒加载默认图片
  loading:hjt
})
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus=this
    Vue.prototype.$API=API
  }
}).$mount('#app')
