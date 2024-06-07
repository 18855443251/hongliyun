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
    this.getData();
  },
  methods: {
    async getData() {
      let res = await new Promise((resolve) => {
        console.log('1')
        resolve('3')
      });
      console.log(res);
      console.log("2");
    },
  },
};
</script>
<style scoped></style>
