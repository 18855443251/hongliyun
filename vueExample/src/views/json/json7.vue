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
    {{$tableList()}}
  </div>
</template>

<script>
import {b,text} from './test.js'
export default {
  name: "home",
  data() {
    return {
    };
  },
  created() {
    console.log(this.$tableList);
    console.log(b,text(),'1231465');
  },
  methods: {},
};
</script>

<style scoped></style>
