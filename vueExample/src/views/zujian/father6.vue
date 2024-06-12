<template>
  <div>
    <!-- 使用input语法糖在子组件和父组件之间实现数据的双向绑定： -->
    <son6 v-model="inputValue"></son6>
    <div>相对应{{ inputValue }}</div>
    <!-- <son6 v-bind:value="inputValue" v-on:input="inputValue = argument[0]"></son6> -->
    <!-- 这个时候，inputValue接受的值就是input事件的回调函数的第一个参数，所以在自定义组件中，要实现数据绑定，还需要$emit去触发input的事件。 -->
    <!-- this.$emit('input', value) -->
  </div>
</template>

<script>
import son6 from "./components/son6";
export default {
  components: {
    son6,
  },
  data() {
    return {
      inputValue: "张三",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
