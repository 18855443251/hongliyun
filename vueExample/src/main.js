/*
 * @Author: your name
 * @Date: 2021-06-18 09:31:24
 * @LastEditTime: 2021-08-12 15:29:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: \app空工程\bank\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store1";
import mixins from "./utils/mixins";
import filter from "./utils/filter";

// 第一种引入方式 过滤器单独分开写，没有放在同一个index.js里面
// import * as filters from './utils/filter'
// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
// })

import axiosPlugin from "./utils/axios";
import '@/assets/ttf/font.css'
import "@/assets/css/common.less";
import clipboard from "vue-clipboard2";
Vue.mixin(mixins);
Vue.use(axiosPlugin);
Vue.use(clipboard);
for (let [key, value] of Object.entries(filter)) {
  Vue.filter(key, value);
}
Vue.use(router);
// // 监听Nebula容器物理返回事件
// document.addEventListener('back', function (e) {
//   Vue.$router.backward()
// }, false);

Vue.prototype.$imgSrc = 'http://192.168.52.151:7770/';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");