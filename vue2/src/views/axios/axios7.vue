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
    <div @click="test">取消get请求</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      cancel: null,
    };
  },
  created() {},
  methods: {
    test() {
      //   const CancelToken = axios.CancelToken;
      //   if (this.cancel != null) {
      //     cancel();
      //   }
      axios({
        url: "http://localhost:3000/posts",
        method: "get",
        cancelToken: new axios.CancelToken((c) => {
          this.cancel = c;
        }),
      }).then((res) => {
        console.log(res);
        // this.cancel = null;
      });
    },
  },
};
</script>

<style scoped></style>
