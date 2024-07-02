    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-20 09:02:33
 * @LastEditors: Please set LastEditors
 * @Description:client
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div>{{ $route.params.username }}</div>
    <!-- <router-link :to="`/user1/${$route.params.username}/uesrSon1`"
      >用户</router-link
    > -->
    <router-link to="uesrSon1" append>用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "right",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.params, "params");
    console.log(this.$route.query, "query");
  },

  methods: {},
};
</script>

<style scoped>
</style>
