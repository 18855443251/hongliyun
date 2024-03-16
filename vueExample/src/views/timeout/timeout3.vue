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
    <div>宏任务中包含微任务</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    this.test();
  },
  methods: {
    // 宏任务中包含微任务
    test() {
      // 宏任务队列 1
      setTimeout(() => {
        // 宏任务队列 2.1
        console.log("timer_1");
        setTimeout(() => {
          // 宏任务队列 3
          console.log("timer_3");
        }, 0);
        new Promise((resolve) => {
          resolve();
          console.log("new promise");
        }).then(() => {
          // 微任务队列 1
          console.log("promise then");
        });
      }, 0);
      setTimeout(() => {
        // 宏任务队列 2.2
        console.log("timer_2");
      }, 0);
      console.log("========== Sync queue ==========");
    },
  },
};
</script>

<style scoped></style>
