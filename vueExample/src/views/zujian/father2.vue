<template>
  <div>
    <div @click="test">获取innerHTML的值</div>
    <div>{{myName}}</div>
    <h3 id="myh3" ref="myh3">测试</h3>
    <son4 ref="mylogin" @jumpto="jumpto"></son4>
    <div>{{ msg }}</div>
  </div>
</template>

<script>
import son4 from "./components/son4";

export default {
  name: "home",
  components: {
    son4,
  },
  data() {
    return {
      msg: "",
      name: "张三",
      myName: "",
    };
  },
  created() {},
  methods: {
    test() {
      var { name } = this;
      alert(this.$refs.myh3.innerHTML);
      this.myName = name;
    },
    jumpto() {
      this.msg = this.$refs.mylogin.msg; //父组件获取子组件的值
      this.$refs.mylogin.show(); //父组件调用子组件的方法
    },
  },
};
</script>

<style scoped></style>
