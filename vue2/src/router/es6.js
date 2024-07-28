export default [
  {
    name: "assign1",
    path: "/assign1",
    component: () =>
      import(/* webpackChunkName: "fenye" */ "@/views/es6/assign1.vue"),
  },
  {
    name: "this1",
    path: "/this1",
    component: () =>
      import(/* webpackChunkName: "fenye" */ "@/views/es6/this1.vue"),
  },
  {
    name: "this2",
    path: "/this2",
    component: () =>
      import(/* webpackChunkName: "fenye" */ "@/views/es6/this2.vue"),
  },
  {
    name: "this3",
    path: "/this3",
    component: () =>
      import(/* webpackChunkName: "fenye" */ "@/views/es6/this3.vue"),
  },
  {
    name: "this4",
    path: "/this4",
    component: () =>
      import(/* webpackChunkName: "fenye" */ "@/views/es6/this4.vue"),
  },
  {
    name: "this5",
    path: "/this5",
    component: () =>
      import(/* webpackChunkName: "fenye" */ "@/views/es6/this5.vue"),
  },
  {
    name: "let1",
    path: "/let1",
    component: () =>
      import(/* webpackChunkName: "fenye" */ "@/views/es6/let1.vue"),
  },
  {
    name: "arguments1",
    path: "/arguments1",
    component: () =>
      import(/* webpackChunkName: "my" */ "@/views/es6/arguments1.vue"),
  },
  {
    name: "arrow1",
    path: "/arrow1",
    component: () =>
      import(/* webpackChunkName: "my" */ "@/views/es6/arrow1.vue"),
  },
  {
    name: "arrow2",
    path: "/arrow2",
    component: () =>
      import(/* webpackChunkName: "my" */ "@/views/es6/arrow2.vue"),
  },
  {
    name: "arrow3",
    path: "/arrow3",
    component: () =>
      import(/* webpackChunkName: "my" */ "@/views/es6/arrow3.vue"),
  },
];
