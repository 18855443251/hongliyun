<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2022-06-17 14:10:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view">
    <div>{{ name }}</div>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {
      name: "",
    };
  },
  created() {
    // let a = this.test1();
    // console.log(a); //返回的是一个promise对象
    // this.test1().then((res) => {
    //   this.name = res;
    //   console.log(res); //张三
    // });
    // 第一种写法
    this.test2(false)
      .then((value) => {
        this.name = value;
      })
      .catch((err) => {
        this.name = err;
      });
    // 第二种写法
    // let res = this.test2(true); //返回的是一个promise对象
    // console.log(res,'返回的是一个promise对象')
    // res.then((value) => {
    //   this.name = value;
    // });
  },
  methods: {
    // async写在函数前，返回一个promise对象，当返回值不是一个promise对象，会强制转为promise对象
    async test1() {
      return "张三";
    },
    async test2(flag) {
      if (flag) {
        return "李四";
      } else {
        throw "错误";
      }
    },
  },
};
</script>
<style scoped>
</style>