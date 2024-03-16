<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view"></div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {
      obj1: {
        name: "张三",
        date: {
          age: "18",
        },
      },
    };
  },
  created() {
    // this.test1();
    this.test2()
  },
  methods: {
    test1() {
      // 浅拷贝
      var obj3 = Object.assign({}, this.obj1);
      obj3.name = "李四";
      obj3.date.age = "33";
      console.log("obj1", this.obj1);
      console.log("obj3", obj3);
    },
    // JavaScript 中数组和对象自带的拷贝方法都是“首层浅拷贝”；
    test2() {
      let srcObj = { name: "lilei", grade: { chi: "80", eng: "100" } };
      let copyObj2 = Object.assign({}, srcObj);
      copyObj2.name = "zhangsan";
      copyObj2.grade.chi = "50";
      console.log("srcObj", srcObj); //name: "lilei" grade: {chi: "50", eng: "100"}
      console.log("copyObj2", copyObj2); //name: "zhangsan" grade: {chi: "50", eng: "100"}
    },
  },
};
</script>
<style scoped>
</style>