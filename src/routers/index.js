import Vue from 'vue'
// 全局引入vuetouter
import VueRouter from 'vue-router'
// 安装路由
Vue.use(VueRouter)

//定义路由组件
import Tabbar from '../views/Tabbar'
//列表页
import List from '../views/List'
// 登录页
import Sin from '../views/Sin'

//嵌套路由
import Home from '../views/Tabbar/Home'
//购物车
import Car from '../views/Tabbar/Car'
//分页列
import Fenlei from '../views/Tabbar/Fenlei'
//个人中心
import Geren from '../views/Tabbar/Geren'
//首页的详情
import Photoinfo from '../views/Tabbar/Photoinfo'
//列表页
import Xiangqin from '../views/Tabbar/Xiangqin'

const routes = [{
    name: 'tabbar',
    path: '/tabbar',
    component: Tabbar,
    // 嵌套路由，先进底部选项卡，再去找首页
    children: [{
        name: 'home',
        // 第二层路由的path是没有/
        path: 'home',
        component: Home,
    }, {
        name: 'fenlei',
        path: 'fenlei',
        component: Fenlei,
    }, {
        name: 'geren',
        path: 'geren',
        component: Geren,
    }, {
        name: 'car',
        path: 'car',
        component: Car,
    }],
}, {
    name: 'list',
    path: '/list',
    component: List
}, {
    name: 'photoinfo',
    path: '/photoinfo/:id',
    component: Photoinfo
}, {
    name: 'xiangqin',
    path: '/xiangqin',
    component: Xiangqin
}, {
    name: 'sin',
    path: '/sin',
    component: Sin
}, {
    path: '/',
    redirect: () => {
        return '/tabbar/home'
    }
}]

const router = new VueRouter({
    routes //(缩写) routes : routes
})


export default router