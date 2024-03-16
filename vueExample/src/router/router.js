// 正则处理
export default [
  {
    name: "router1",
    path: "/router1",
    component: () =>
      import(/* webpackChunkName: "rep" */ "@/views/router/router1.vue"),
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
        path: "/left",
        component: () =>
          import(/* webpackChunkName: "rep" */ "@/views/router/left.vue"),
      },
      {
        name: "right",
        path: "/right",
        component: () =>
          import(/* webpackChunkName: "rep" */ "@/views/router/right.vue"),
      },
    ],
  },

  {
    path: "/detail/:username/ages/:age",
    // path: "/detail/:id",
    name: "detail",
    meta: {
      title: "详情页面",
      keepAlive: true, // 不需要缓存
      isAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "detail" */ "@/views/router/detail.vue"),
  },
];
