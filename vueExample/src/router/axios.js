
const axios1 = () =>
  import(/* webpackChunkName: "my" */ "@/views/axios/axios1.vue"); // 通讯录
const axios2 = () =>
  import(/* webpackChunkName: "my" */ "@/views/axios/axios2.vue"); // 通讯录
export default [
  {
    name: "axios1",
    path: "/axios1",
    component: axios1,
  },
  {
    name: "axios2",
    path: "/axios2",
    component: axios2,
  },
];
