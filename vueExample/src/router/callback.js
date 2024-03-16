/*
 * @Author: your name
 * @Date: 2022-06-29 10:51:28
 * @LastEditTime: 2022-06-29 10:51:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Vue\src\router\callback.js
 */
export default [{
    name: "callback1",
    path: "/callback1",
    component: () => import( /* webpackChunkName: "callback" */ "@/views/callback/callback1.vue"),
},
{
    name: "callback2",
    path: "/callback2",
    component: () => import( /* webpackChunkName: "callback" */ "@/views/callback/callback2.vue"),
}]