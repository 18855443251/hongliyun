// 正则处理
export default [
  {
    name: "router1",
    path: "/router1",
    component: () =>
      import(/* webpackChunkName: "rep" */ "@/views/router/router1.vue"),
    meta: {
      isLogin: true,
    },
  },
  {
    name: "router2",
    path: "/router2",
    component: () =>
      import(/* webpackChunkName: "rep" */ "@/views/router/router2.vue"),
    meta: {
      isLogin: true,
    },
  },
  {
    name: "user1",
    path: "/user1/:username",
    component: () =>
      import(/* webpackChunkName: "rep" */ "@/views/router/user1.vue"),
    children: [
      {
        name: "uesrSon1",
        path: "uesrSon1",
        component: () =>
          import(/* webpackChunkName: "rep" */ "@/views/router/uesrSon1.vue"),
      },
    ],
  },
  {
    name: "main",
    path: "/main",
    component: () =>
      import(/* webpackChunkName: "rep" */ "@/views/router/main.vue"),
    redirect: {
      name: "left",
    },
    children: [
      {
        name: "left",
        path: "left",
        component: () =>
          import(/* webpackChunkName: "rep" */ "@/views/router/left.vue"),
      },
      {
        name: "right",
        path: "right",
        component: () =>
          import(/* webpackChunkName: "rep" */ "@/views/router/right.vue"),
      },
    ],
  },
  {
    name: "detail",
    path: "/detail/:username/ages/:age",
    // path: "/detail/:id",
    meta: {
      title: "详情页面",
      keepAlive: true, // 不需要缓存
      isAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "detail" */ "@/views/router/detail.vue"),
  },
];
