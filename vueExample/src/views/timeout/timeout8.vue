<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2022-06-17 14:10:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view"></div>
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
    // 1 2 3
    new Promise((resolve, reject) => {
      console.log("1");
      setTimeout(() => {
        console.log("2");
        resolve("3");
      }, 100);
    })
      .then((value) => {
        console.log(value); //3
      })
      .catch((error) => {
        console.log(error, "error");
      });
  },
  methods: {},
};
</script>
<style scoped></style>
