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
    <div @click="test2">发送post请求</div>
    <div @click="test3">发送put请求</div>
    <div @click="test4">发送delete请求</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {};
  },
  created() {},
  methods: {
    test() {
      axios({
        url: "http://localhost:3000/posts",
        method: "get",
      }).then((res) => {
        console.log(res);
      });
    },
    // test1() {
    //   axios.get("http://localhost:3000/posts").then((res) => {
    //     console.log(res);
    //   });
    // },
    test2() {
      axios({
        url: "http://localhost:3000/posts",
        method: "post",
        data: { title: "王五", views: "300" },
      }).then((res) => {
        console.log(res);
      });
    },
    test3() {
      axios({
        url: "http://localhost:3000/posts/1",
        method: "put",
        data: { title: "赵六", views: "300" },
      }).then((res) => {
        console.log(res);
      });
    },
    test4() {
      axios({
        url: "http://localhost:3000/posts/fa78",
        method: "delete",
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style scoped></style>
