/*
 * @Author: your name
 * @Date: 2022-06-17 10:53:51
 * @LastEditTime: 2022-06-17 14:36:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\router\promise.js
 */
//发现首页功能选择频道页
const promise1 = () => import( /* webpackChunkName: "string" */ "@/views/promise/promise1");
const promise2 = () => import( /* webpackChunkName: "string" */ "@/views/promise/promise2");
const promise3 = () => import( /* webpackChunkName: "string" */ "@/views/promise/promise3");
const promise4 = () => import( /* webpackChunkName: "string" */ "@/views/promise/promise4");
const promise5 = () => import( /* webpackChunkName: "string" */ "@/views/promise/promise5");
const promise6= () => import( /* webpackChunkName: "string" */ "@/views/promise/promise6");
const promise7= () => import( /* webpackChunkName: "string" */ "@/views/promise/promise7");
export default [{
    name: "promise1",
    path: "/promise1",
    component: promise1,
}, {
    name: "promise2",
    path: "/promise2",
    component: promise2,
}, {
    name: "promise3",
    path: "/promise3",
    component: promise3,
}, {
    name: "promise4",
    path: "/promise4",
    component: promise4,
}, {
    name: "promise5",
    path: "/promise5",
    component: promise5,
},{
    name: "promise6",
    path: "/promise6",
    component: promise6,
},{
    name: "promise7",
    path: "/promise7",
    component: promise7,
}, ]