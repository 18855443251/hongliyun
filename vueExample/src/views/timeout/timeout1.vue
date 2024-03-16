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
    <div v-for="(item, index) in timeList" @click="test" :key="index">{{ item.time }}分{{item.time}}秒</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      timer: null, //定时器
      timeList: [{ time: "1" }],
    };
  },
  created() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      for (let item of this.timeList) {
        item.time++;
        console.log(item.time);
      }
    }, 1000);
  },
  methods: {
    test(){
      this.jump('/timeout2')
    }
  },
  // beforeDestroy(){
  //   clearInterval(this.timer);
  // },
  destroyed(){
    clearInterval(this.timer);
  }
};
</script>

<style scoped></style>
