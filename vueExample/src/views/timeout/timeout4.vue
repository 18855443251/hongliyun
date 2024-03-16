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
    test() {
      async function async1() {
        console.log("async1 start");
        await async2();
        console.log("async1 end");
      }
      async function async2() {
        console.log("async2");
      }
      console.log("script start");
      setTimeout(function () {
        console.log("setTimeout");
      }, 0);

      async1();
      new Promise(function (resolve) {
        console.log("promise1");
        resolve();
      }).then(function () {
        console.log("promise2");
      });
      console.log("script end");
    },
  },
};
</script>

<style scoped></style>
