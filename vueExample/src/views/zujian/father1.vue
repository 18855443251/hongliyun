<!--
 * @Author: your name
 * @Date: 2021-07-07 10:35:39
 * @LastEditTime: 2022-06-02 09:53:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\components\children\children1.vue
-->
<template>
  <div>
    <!-- @click.prevent -->
    <!-- @click.native.prevent -->
    <children1 @click.native="test"></children1>
    <!-- 父组件想在子组件上监听自己的click的话，需要加上native修饰符。 -->
  </div>
</template>
<script>
import children1 from "./components/children/children1";

export default {
  components: {
    children1,
  },
  //  provide: {
  //     name: "张三",
  //   },
  provide() {
    return {
      getJgItem: () => this.jgItem,
      name: "张三",
    };
  },
  data() {
    return {
      jgItem: "借记卡",
    };
  },
  methods: {
    test() {
      console.log("张三");
    },
  },
};
</script>
