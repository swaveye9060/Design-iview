const menuList = [{
    name: "home",
    path: '/home',
    icon: "ios-navigate",
    title: "主页",
    children: [],
  },
  {
    name: "test",
    path: null,
    icon: "ios-keypad",
    title: "测试菜单 1",
    children: [{
        name: "test-1",
        path: '/test-1',
        icon: "ios-navigate",
        title: "子菜单 1",
        children: [],
      },
      {
        name: "test-2",
        path: null,
        icon: "ios-navigate",
        title: "子菜单 2",
        children: [{
          name: "test-2-1",
          path: '/test-2-1',
          icon: "ios-navigate",
          title: "多层子菜单 1",
          children: [],
        }, ],
      },
      {
        name: "test-3",
        path: '/test-3',
        icon: "ios-navigate",
        title: "子菜单 3",
        children: [],
      },
    ],
  },
  {
    name: "test02",
    path: null,
    icon: "ios-analytics",
    title: "测试菜单 2",
    children: [{
        name: "test02-1",
        path: '/test02-1',
        icon: "ios-analytics",
        title: "子菜单 1",
        children: [],
      },
      {
        name: "test02-2",
        path: '/test02-2',
        icon: "ios-analytics",
        title: "子菜单 2",
        children: [],
      },
    ],
  },
]

export default menuList