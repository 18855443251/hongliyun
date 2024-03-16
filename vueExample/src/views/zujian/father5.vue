<template>
  <div>
    <div @click="add">新增</div>
    <div v-if="isShow">
      <son1 v-if="stepitem === 1"></son1>
      <son2
        v-if="stepitem === 2"
        :sonList="sonList"
        :formData="formData"
      ></son2>
      <son3 v-if="stepitem === 3"></son3>
      <son4 v-if="stepitem === 4" ref="son4"></son4>
      <div @click="handleBackClick">上一步</div>
      <div @click="handleGoClick">下一步</div>
    </div>
  </div>
</template>

<script>
import son1 from "./components/son1";
import son2 from "./components/son2";
import son3 from "./components/son3";
import son4 from "./components/son4";
export default {
  components: {
    son1,
    son2,
    son3,
    son4,
  },
  data() {
    return {
      sonList: [],
      stepitem: 1,
      formData: { name: "就" },
      isShow: false,
    };
  },
  created() {
    console.log("father4");
  },
  methods: {
    add() {
      this.isShow = true;
      // this.$nextTick(() => {
      //   this.$refs.son4.test11();
      // });
    },
    handleBackClick() {
      // 上一步
      if (this.stepitem != 1) {
        this.stepitem--;
      }
    },
    handleGoClick() {
      if (this.stepitem != 4) {
        this.stepitem++;
        this.$refs.son4.test11();
      }
    },
  },
};
</script>

<style scoped></style>
