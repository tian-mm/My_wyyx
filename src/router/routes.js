// 引入要注册为路由组件的组件
// 首页
import FirstView from '../pages/FirstView/FirstView.vue'
// 分类
import Classify from '../pages/Classify/Classify.vue'
// 识物
import Things from '../pages/Things/Things.vue'
// 购物车
import ShopCart from '../pages/ShopCart/ShopCart.vue'
// 个人中心
import Profile from '../pages/Profile/Profile.vue'
// 搜索
import Search from '../pages/Search/Search.vue'

export default [
  {
    path:'/firstview',
    component: FirstView
  },
  {
    path:'/classify',
    component: Classify
  },
  {
    path:'/things',
    component: Things
  },
  {
    path:'/shopcart',
    component: ShopCart
  },
  {
    path:'/profile',
    component: Profile
  },
  {
    path:'/search',
    component: Search
  },
  {
    path:'/',
    redirect: '/firstview'  //重定向
  }
]