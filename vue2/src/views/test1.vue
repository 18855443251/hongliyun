<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:34
 * @LastEditTime: 2022-08-04 10:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\VxMobile.vue
-->
<template>
  <div class="claneCache_view"></div>
</template>
<script>
import navBar from "@/components/navBar";
export default {
  name: "claneCache",
  components: { navBar },
  data() {
    return {
      inputVal: "",
    };
  },
  created() {
    function greeting(name) {
      alert("Hello " + name);
    }

    function processUserInput(callback) {
      var name = "张三";
      callback(name);
    }

    processUserInput(greeting);
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped></style>

