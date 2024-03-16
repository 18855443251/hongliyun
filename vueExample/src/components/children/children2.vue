<!--
 * @Author: your name
 * @Date: 2021-07-07 10:35:39
 * @LastEditTime: 2021-07-07 11:19:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\components\children\children1.vue
-->
<template>
  <div>
    <div>{{name}}</div>
    <div>{{jgItem}}</div>
  </div>
</template>
<script>
export default {
  inject: ["name", "getJgItem"],
  data() {
    return {};
  },
  computed: {
    jgItem() {
      return this.getJgItem();
    },
  },
  methods: {},
};
</script>
