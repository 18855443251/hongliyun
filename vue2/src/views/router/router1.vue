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
    <router-link to="/">首页</router-link>
    <router-link to="/login">登录</router-link>
    <router-link to="/user1/张三">用户</router-link>
    <div @click="test1">手动跳转首页</div>
    <div @click="test2">手动跳转传参</div>
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
    console.log(this.$route.params);
  },
  watch: {
    $route: {
      handler: function (route) {
        // console.log(route, "好好");
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    test1() {
      this.$router.push("/home");
    },
    test2() {
      this.$router.push({
        name: "router2",
        params: {
          name: "张三",
        },
      });
    },
  },
};
</script>

<style scoped>
</style>
