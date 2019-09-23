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
// 引入发现
import Tab from '../pages/Things/Tab.vue'
// 引入甄选家
import Index from '../pages/Things/Index.vue'
// 发现导航列表
import NavItem from '../pages/Things/NavItem.vue'
// 引入分类右侧商品列表
import ClassifyRight from '../pages/Classify/ClassifyRight.vue'
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
    },
    children: [{
      path: '/classify/classifyright/:id',
      component: ClassifyRight,
      meta: {
        isShowFooter: true
      },
    },
    {
      path: '/classify',
      redirect: '/classify/classifyright/0'
    }
  ]
  },
  {
    path: '/things',
    component: Things,
    meta: {
      isShowFooter: true
    },
    children: [{
        path: '/things/tab',
        component: Tab,
        meta: {
          isShowFooter: true
        },
        children: [{
            path: '/things/tab/navitem/:id', //路由传参
            component: NavItem,
            meta: {
              isShowFooter: true
            }
          },
          {
            path: '/things/tab',
            redirect: '/things/tab/navitem/1'
          }
        ],

      },
      {
        path: '/things/index',
        component: Index
      },
      {
        path: '/things',
        redirect: '/things/tab'
      }

    ]
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