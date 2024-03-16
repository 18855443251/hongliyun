<template>
  <div>
    <div @click="jumpto">儿子</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "ok",
    };
  },
  created() {},
  methods: {
    jumpto() {
      this.$emit("jumpto");
    },
    show() {
      console.log("show方法执行了...");
    },
  },
};
</script>

<style scoped></style>
