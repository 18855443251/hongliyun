/*
 * @Author: your name
 * @Date: 2022-06-02 10:47:23
 * @LastEditTime: 2022-06-02 10:47:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\router\slot.js
 */ // 时间
 export default [{
    name: "timeout1",
    path: "/timeout1",
    component: () => import( /* webpackChunkName: "rep" */ "@/views/timeout/timeout1.vue"),
},
{
    name: "timeout2",
    path: "/timeout2",
    component: () => import( /* webpackChunkName: "rep" */ "@/views/timeout/timeout2.vue"),
},
{
    name: "timeout3",
    path: "/timeout3",
    component: () => import( /* webpackChunkName: "rep" */ "@/views/timeout/timeout3.vue"),
},
{
    name: "timeout4",
    path: "/timeout4",
    component: () => import( /* webpackChunkName: "rep" */ "@/views/timeout/timeout4.vue"),
},
{
    name: "timeout5",
    path: "/timeout5",
    component: () => import( /* webpackChunkName: "rep" */ "@/views/timeout/timeout5.vue"),
},
{
    name: "timeout6",
    path: "/timeout6",
    component: () => import( /* webpackChunkName: "rep" */ "@/views/timeout/timeout6.vue"),
},
{
    name: "timeout7",
    path: "/timeout7",
    component: () => import( /* webpackChunkName: "rep" */ "@/views/timeout/timeout7.vue"),
}]