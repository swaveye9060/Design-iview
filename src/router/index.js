import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import ViewUI from 'view-design';
Vue.use(ViewUI);

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
    path: '/main',
    name: 'main',
    component: () => import('../components/viewMain/index'),
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index.vue')
    }, ]
  },
]

const router = new VueRouter({
  routes
})


// GOOD
router.beforeEach((to, from, next) => {
  // 引入/拿到token (需写在里面)
  const token = JSON.parse(localStorage.getItem("token")) || '';
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