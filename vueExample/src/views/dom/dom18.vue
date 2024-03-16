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
    <div @click="test">点击</div>
    <div ref="viewRef" v-show="name == '张三'">测试1</div>
    <div ref="viewRef1" v-if="name == '李四'">测试2</div>
    <!--2 ref + for -->
    <!-- <div v-for="(item, index) in 2" :key="index">
      <div ref="viewRef">{{index}}</div>
    </div> -->
    <!-- <div v-for="(item, index) in 2" :key="index">
      <div ref="viewRef" v-show="index === 1">{{index}}</div>
    </div> -->
    <!-- <div v-for="(item, index) in 2" :key="index">
      <div ref="viewRef" v-if="index === 1">{{index}}</div>
    </div>  -->
  </div>
</template>

<script>
import son1 from "./components/son1";
export default {
  name: "home",
  components: {
    son1,
  },
  data() {
    return {
      name: "",
    };
  },
  mounted() {
  },
  methods: {
    test() {
      this.name = "张三";
      console.log(this.$refs.viewRef.innerHTML);
    },
  },
};
</script>

<style scoped>
</style>
