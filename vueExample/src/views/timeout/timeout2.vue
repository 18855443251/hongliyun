<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 17:00:43
 * @LastEditors: Please set LastEditors
 * @Description:定时器
 * @FilePath: \vueDemo\src\views\string\match1.vue
-->
<template>
  <div>
    <div> 主线程上宏任务、微任务执行顺序</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    this.test()
  },
  methods: {
    // 主线程上宏任务、微任务执行顺序
    test() {
      console.log("---start---"); //第一轮主线程
      setTimeout(() => {
        console.log("setTimeout"); // 将回调代码放入个宏任务队列，第二轮宏任务执行
      }, 0);
      new Promise((resolve, reject) => {
        console.log("---Promise第一轮微任务同步执行---"); //第一轮微任务同步执行
        resolve();
      }).then(() => {
        console.log("Promise.then实例成功回调执行"); // 将回调代码放入微任务队列，第一轮宏任务执行完后立即执行
      });
      console.log("---end---"); //第一轮主线程结束
    },
  },
};
</script>

<style scoped></style>
