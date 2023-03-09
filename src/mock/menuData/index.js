const menuList = [{
    name: "home",
    path: '/home',
    title: "主页",
    icon: "ios-navigate",
    component: 'views/home/index',
    children: [],
  },
  {
    name: "test",
    path: null,
    title: "测试菜单 1",
    icon: "ios-keypad",
    component: null,
    children: [{
        name: "test-1",
        path: '/test-1',
        title: "子菜单 1",
        icon: "ios-navigate",
        component: 'views/home/index',
        children: [],
      },
      {
        name: "test-2",
        path: null,
        title: "子菜单 2",
        icon: "ios-navigate",
        component: null,
        children: [{
          name: "test-2-1",
          path: '/test-2-1',
          title: "多层子菜单 1",
          icon: "ios-navigate",
          component: 'views/home/index',
          children: [],
        }, ],
      },
      {
        name: "test-3",
        path: '/test-3',
        title: "子菜单 3",
        icon: "ios-navigate",
        component: 'views/home/index',
        children: [],
      },
    ],
  },
  {
    name: "test02",
    path: null,
    title: "测试菜单 2",
    icon: "ios-analytics",
    component: null,
    children: [{
        name: "test02-1",
        path: '/test02-1',
        title: "子菜单 1",
        icon: "ios-analytics",
        component: 'components/HelloWorld',
        children: [],
      },
      {
        name: "test02-2",
        path: '/test02-2',
        title: "子菜单 2",
        icon: "ios-analytics",
        component: 'views/home/index',
        children: [],
      },
    ],
  },
  {
    name: "individual",
    path: '/individual',
    title: "个人中心",
    icon: "logo-xbox",
    component: 'views/individual/index',
    children: [],
  },
]

export default menuList