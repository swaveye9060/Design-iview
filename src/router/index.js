import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import ViewUI from 'view-design';
Vue.use(ViewUI);


import menuList from '../mock/menuData/index';
const mainComponent = []

/* 获取菜单 */
function getMenuList(array) {
  array.forEach(element => {
    // 通过路径过滤组件
    if (element.path) {
      // console.log(component, 333);
      mainComponent.push({
        path: element.path,
        name: element.name,
        component: () => import(`@/${element.component}.vue`),
      })
    }
    if (element.children && element.children.length > 0) {
      getMenuList(element.children)
    }
  });
}

getMenuList(menuList)

// 登录页
import Login from '../views/login/login.vue'



const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/401',
    name: '401',
    component: () => import('../components/error-page/401.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../components/error-page/404.vue'),
  },
  {
    path: '/500',
    name: '500',
    component: () => import('../components/error-page/500.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../components/viewMain/index'),
    children: [
      // {
      //   path: '/home',
      //   name: 'home',
      //   component: () => import('@/views/home/index.vue')
      // },
      ...mainComponent,
    ]
  },
]


const router = new VueRouter({
  routes
})


// GOOD
router.beforeEach((to, from, next) => {
  // 引入/拿到token (需写在里面)
  const token = JSON.parse(sessionStorage.getItem("token")) || '';
  // console.log(token, 333);
  // console.log(to, 333);
  if (to.path !== '/login' && !token) {
    console.log('无token 需登录');
    next('/login')
  } else if (to.path === '/login' && token) {
    console.log('有token 无需登录');
    next('/main')
  } else next()
})

// 解决vue-router 连续点击报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default router