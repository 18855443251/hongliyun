<template>
  <div>
    <div>son4</div>
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
  created() {
    console.log("son4");
  },
  methods: {
    jumpto() {
      this.$emit("jumpto");
    },
    show() {
      console.log("show方法执行了...");
    },
    test11() {
      console.log("test11...");
    },
  },
};
</script>

<style scoped></style>
