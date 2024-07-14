<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-12 10:58:29
 * @LastEditors: Please set LastEditors
 * @Description: 发接口方式
 * @FilePath: \vueDemo\src\views\arr\hebingArr.vue
-->
<template>
  <div>
    <div @click="test">发送get请求</div>
    <div @click="test1">发送get请求</div>
    <div @click="test2">发送post请求</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    test() {
      axios.get("http://localhost:3000/posts").then((res) => {
        console.log(res);
      });
    },
    test1() {
      axios
        .request({
          url: "http://localhost:3000/posts",
          method: "get",
        })
        .then((res) => {
          console.log(res);
        });
    },
    test2() {
      axios
        .post("http://localhost:3000/posts", {
          title: "账上",
          views: "300",
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped></style>
