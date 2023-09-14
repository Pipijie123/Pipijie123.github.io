import requests from './request'
import mockRequests from './mockAjax'


export const reqCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'})

//轮播图
export const reqGetBannerList=()=>mockRequests.get('/banner')
//floor
export const reqGetFloorList=()=>mockRequests.get('/floor')
//搜索模块数据
export const reqGetSearchInfo=(params)=>requests({url:"/list",method:"post",data:params})
//详情页面
export const reqGoodsInfo=(skuId)=>requests({url:`/item/${skuId}`,method:"get"})
//向购物车里添加请求
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"})
//获取购物车列表
export const reqCartList=()=>requests({url:"/cart/cartList",method:"get"})
//删除购物车单项物品
export const reqDeleteCartById=(skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})
//购物车物品选中状态
export const reqUpdateCheckedById=(skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:"get"})
//获取验证码
export const reqCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})
//验证注册信息  data是一个对象包含三个参数：phone，password，code
export const reqRegister=(data)=>requests({url:"/user/passport/register",data,method:'post'})
//验证登录信息
export const reqLogin=(data)=>requests({url:"/user/passport/login",data,method:'post'})
//获取用户信息 请求头携带token获取
export const reqUserInfo=()=>requests({url:"/user/passport/auth/getUserInfo",method:"get"})
//退出登录
export const reqLogout=()=>requests({url:"/user/passport/logout",method:'get'})
//获取收货地址
export const reqAddressInfo=()=>requests({url:"/user/userAddress/auth/findUserAddressList",method:"get"})
//获取商品清单
export const reqOrderInfo=()=>requests({url:'/order/auth/trade',method:"get"})
//提交订单信息获取订单号
export const reqSubmitOrder=(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:"post"})
//获取支付信息
export const reqPayInfo=(orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})
//验证是否支付成功
export const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});
//获取个人中心数据
export const reqMyOrderList=(page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:"get"})