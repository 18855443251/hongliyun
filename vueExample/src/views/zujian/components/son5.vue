<template>
  <div>
    <p>子组件库存:{{ value }}</p>
    <button @click="addFun">增加1</button>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {
    value: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    addFun() {
      this.$emit("input", this.value+1);
    }
  },
};
</script>

<style scoped></style>
