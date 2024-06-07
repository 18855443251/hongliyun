/*
 * @Author: your name
 * @Date: 2021-06-18 09:31:24
 * @LastEditTime: 2021-08-25 10:44:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \app空工程\bank\src\router\my.js
 */
const bibao1 = () => import( /* webpackChunkName: "my" */ '@/views/bibao/bibao1.vue') // 通讯录

export default [{
    name: "bibao1",
    path: "/bibao1",
    component: bibao1,
}]