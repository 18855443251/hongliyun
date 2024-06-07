/*
 * @Author: your name
 * @Date: 2021-06-18 09:31:24
 * @LastEditTime: 2021-08-25 10:44:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app空工程\bank\src\router\my.js
 */
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
