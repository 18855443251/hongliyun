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
    <div>
      <div>接收参数</div>
      <div>{{ $route.params.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "right",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$route.params)
  },

  methods: {},
};
</script>

<style scoped>
</style>
