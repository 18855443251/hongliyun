<template>
  <div>
    <div id="app">
      <div>
        <button @click="clickHandler">普通点击</button>
      </div>
      <div>
        <button @click="clickHandler1">节流点击</button>
      </div>
      <div>普通输入: <input type="text" @input="inputHandler" /></div>
      <div>防抖输入<input type="text" @input="inputHandler1" /></div>
    </div>
  </div>
</template>

<script>
import { debounce, throttle } from "@/utils/debounce1.js";
export default {
  name: "home",
  data() {
    return {};
  },
  created() {},
  methods: {
    clickHandler() {
      console.log("普通点击");
    },
    clickHandler1: throttle(function () {
      console.log("节流点击");
    }),
    inputHandler() {
      console.log("普通输入");
    },
    inputHandler1: debounce(function () {
      console.log("防抖输入");
    }),
  },
};
</script>

<style scoped>
</style>
