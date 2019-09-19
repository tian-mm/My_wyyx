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
export default [{
    path: '/firstview',
    component: FirstView,
    // 是否显示footer组件
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/classify',
    component: Classify,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/things',
    component: Things,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: false
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: false
    }
  },
  {
    path: '/',
    redirect: '/firstview' //重定向
  }
]