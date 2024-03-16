    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-20 09:02:33
 * @LastEditors: Please set LastEditors
 * @Description:client
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div class="test">类选择器</div>
    <div class="test">类选择器</div>
    <p>标签</p>
    <p class="intro">querySelectorAll</p>
    <p class="intro">querySelectorAll</p>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      num: "",
      number: "",
    };
  },
  mounted() {
    // getElementsByClassName getElementsByTagName querySelectorAll返回的是一个数组
    document.getElementsByClassName("test")[0].innerHTML = "类选择器修改";
    document.getElementsByClassName("test")[1].innerHTML = "类选择器修改";
    document.getElementsByTagName("p")[0].innerHTML = "标签修改";
    document.querySelectorAll("p.intro")[1].innerHTML = "querySelectorAll修改";
    // document.querySelectorAll("p")// NodeList(3)
    // document.getElementsByClassName("test")// HTMLCollection(2)
    // document.getElementsByTagName("p")// HTMLCollection(3)
    console.log(document.getElementsByTagName("p")[0]);
    let lis =  document.getElementsByTagName("p");
    for (var i = 0; i < lis.length; i++) {
      // 让索引号 乘以 44 就是每个li 的背景y坐标  index就是我们的y坐标
      lis[i].style.color = "red";
    }
  },
  methods: {},
};
</script>

<style scoped>
</style>
