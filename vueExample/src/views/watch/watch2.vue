<template>
  <div class="page">
    <div id="app">
      <son2 v-model="nameList" v-if="show"></son2>
      <div @click="test">测试</div>
    </div>
  </div>
</template>
<script>
import son2 from "./components/son2";
export default {
  name: "thisCompletion",
  components: { son2 },
  data() {
    return {
      nameList: [{ name: "张云" }],
      show: false,
      obj: { sex: "26" },
    };
  },
  watch: {
    obj: {
      handler(newval, oldVal) {
        console.log(newval, "obj-newval-watch");
        console.log(oldVal, "obj-oldVal-watch");
        this.obj = newval;
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    test() {
      this.obj.sex = "22";
      // this.show = true;
    },
  },
};
</script>
<style scoped>
</style>