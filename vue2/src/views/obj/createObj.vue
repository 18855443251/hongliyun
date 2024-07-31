<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
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
    return {};
  },
  created() {
    function Pig(usename, age) {
      this.usename = usename;
      this.age = usename;
    }
    const a = new Pig("张三", 20);
    const b = new Pig("李四", 30);
    console.log(a,'a')
    console.log(b,'b')
  },
  methods: {},
};
</script>
<style scoped>
</style>