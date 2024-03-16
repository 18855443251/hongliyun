<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-12 10:58:29
 * @LastEditors: Please set LastEditors
 * @Description: 发接口方式
 * @FilePath: \vueDemo\src\views\arr\hebingArr.vue
-->
<template>
  <div></div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    this.test();
    // this.test1();
    // this.test2();
    // this.test3();
  },
  methods: {
    test() {
      axios
        .get("/user?ID=12345&name=张三")
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    test1() {
      axios
        .get("/user", {
          params: {
            ID: "12345",
            name: "中文",
          },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    test2() {
      axios
        .post("/user", {
          firstName: "Fred",
          lastName: "Flintstone",
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    test3() {
      // 获取远端图片
      axios({
        method: "get",
        url: "http://bit.ly/2mTM3nY",
        responseType: "stream",
      }).then(function (response) {
        console.log("jj")
      });
    },
  },
};
</script>

<style scoped></style>
