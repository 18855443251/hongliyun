    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-20 09:02:33
 * @LastEditors: Please set LastEditors
 * @Description:client
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div id="card">
    <div>哈哈哈{{ redirect }}</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      redirect: "",
    };
  },
  mounted() {
    console.log(this.$route.params)
  },
  watch: {
    $route: {
      handler: function (route) {
        console.log(route,'好好')
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
   
  },
};
</script>

<style scoped>
</style>
