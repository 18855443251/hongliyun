<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-06-02 10:28:59
 * @LastEditors: Please set LastEditors
 * @Description: 父子组件
 * @FilePath: \vueDemo\src\views\zujian\father.vue
-->
<template>
  <div>
    <!-- son -->
    <son2 :text="text" @fachange="fachange" :sonList="sonList"></son2>
    <br />
    <!-- son1 -->
    <div @click="parentMethod" class="test">
      <son1 ref="c1"></son1>
    </div>
    <br />
    <div>{{name}}</div>
    <!-- <div @click="changeName">获取某个子组件的属性值</div>
    <br />
    <div v-for="(item, index) in bankList" :key="index">
      <div>{{ item.bankName }}</div>
    </div>-->
    <br />
    <son3></son3>
  </div>
</template>
<script>
import son2 from "./components/son2";
import son1 from "./components/son1";
import son3 from "./components/son3";

export default {
  name: "father",
  components: {
    son2,
    son1,
    son3,
  },
  data() {
    return {
      text: "父传子",
      name: "",
      bankList: [],
      fatherName: "王五",
      sonList: [
        {
          name: "小红",
        },
        {
          name: "小白",
        },
      ],
    };
  },
  mounted() {
    this.name = this.$refs.c1.name; //父组件获取子组件的值
  },
  methods: {
    // 改变父组件的值
    fachange(value) {
      this.text = value;
    },
    // 父组件调用子组件方法
    parentMethod() {
      console.log(this.$refs.c1); //返回的是一个vue对象，可以看到所有添加ref属性的元素
      this.$refs.c1.childMethods(); //父组件调用子组件的方法并改变子组件的值
    },
    // 获取某个子组件的属性值
    // changeName() {
    //   this.name = this.$children[1].name;
    //   this.bankList = this.$children[1].bankList;
    // },
  },
};
</script>
<style scoped></style>
