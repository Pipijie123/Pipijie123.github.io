import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Detail from '../pages/Detail'
import AddCartSuccess from '../pages/AddCartSuccess'
import ShopCart from '../pages/ShopCart'
import Trade from '../pages/Trade'
import Pay from '../pages/Pay'
import PaySuccess from '../pages/PaySuccess'
import Center from '../pages/Center'
//二级路由
import groupOrder from '../pages/Center/groupOrder'
import myOrder from '../pages/Center/myOrder'

export default [
    {
        path:'/center',
        component:()=>import('../pages/Center'),
        meta:{show:false},
        children:[
            {
                path:'grouporder',
                name:"grouporder",
                component:()=>import('../pages/Center/groupOrder'),
            },
            {
                path:'myorder',
                name:"myorder",
                component:()=>import('../pages/Center/myOrder'),
            },
            {
                path:'',
                redirect:"myorder",
            }
        ]
    },
    {
        path:'/paysuccess',
        name:"paysuccess",
        component:()=>import('../pages/PaySuccess'),
        meta:{show:false},
        beforeEnter (to, from, next) {
            if (from.path==='/pay') {
              next()
            } else {
              next(false)
            }
          }
    },
    {
        path:'/pay',
        name:"pay",
        component:()=>import('../pages/Pay'),
        meta:{show:false},
        beforeEnter: (to, from, next) => {
            if(from.path=='/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/trade',
        name:"trade",
        component:()=>import('../pages/Trade'),
        meta:{show:false},
        beforeEnter: (to, from, next) => {
            if(from.path=='/shopcart'||from.path=='/ShopCart'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path:'/shopcart',
        name:"ShopCart",
        component:()=>import('../pages/ShopCart'),
        meta:{show:false}
    },
    {
        path:'/addcartsuccess',
        name:"AddCartSuccess",
        component:()=>import('../pages/AddCartSuccess'),
        meta:{show:false},
    },
    {
        path:'/home',
        component:()=>import('../pages/Home'),
        meta:{show:true}
    },
    {
        path:'/search/:keyword?',
        component:()=>import('../pages/Search'),
        meta:{show:true},
        name:'search'
    },

    {
        path:'/login',
        component:()=>import('../pages/Login'),
        meta:{show:false}

    },
    {
        path:'/register',
        component:()=>import('../pages/Register'),
        meta:{show:false}

    },
    {
        path:'/detail/:skuid',
        component:()=>import('../pages/Detail'),
        meta:{show:false}

    },
    {//重定向
        path:'*',
        redirect:'/home'
    }
]