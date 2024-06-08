<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2022-06-17 14:13:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view">
    <div>{{ name }}</div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {
      name: "",
    };
  },
  created() {
    new Promise((resolve, reject) => {
      resolve("哈哈");
    }).then((data) => {
      console.log(data);
      console.log(hh);
    });

    setTimeout(() => {
      console.log("hhh");
    });
  },
  methods: {},
};
</script>
<style scoped>
</style>