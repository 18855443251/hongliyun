<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-30 10:47:02
 * @LastEditors: Please set LastEditors
 * @Description: json导入
 * @FilePath: \vueDemo\src\views\json\json1.vue
-->
<template>
  <div>
    <div>{{ newname1 }}</div>
    <div>{{ newname2 }}</div>
    <div>{{name}}</div>
  </div>
</template>

<script>
import {
  str as newname1,
  year as newname2,
  message as newname3,
  name
} from "@/common/js/config3.js";

export default {
  name: "home",
  data() {
    return {
      newname1,
      newname2,
      name
    };
  },
  created() {
    console.log(newname3("消息"));
  },
  methods: {},
};
</script>

<style scoped></style>
