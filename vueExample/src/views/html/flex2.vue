<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2021-08-25 10:04:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {};
  },
};
</script>
<style scoped>
ul {
  width: 400px;
  height: 400px;
  border: 1px solid #000;
  margin: 100px auto;
  list-style: none;
  display: flex;
}
ul > li {
  width: 100px;
  height: 100px;
  background-color: pink;
  text-align: center;
  line-height: 100px;
  font-size: 35px;
}
ul > li:nth-child(1) {
  /*
            1.flex-grow作用:
            当所有伸缩项宽度的总和没有伸缩容器宽度大的时, 我们可以通过flex-grow让系统调整伸缩项的宽度, 以便于让所有伸缩项的宽度的总和等于伸缩容器的宽度

            2.flex-grow计算公式
            2.1计算剩余的空间
            伸缩容器宽度 - 所有伸缩项的宽度
            400 - 300 = 100
            2.2计算每份剩余空间的宽度
            剩余空间 / 需要的份数
            100 / 6 = 16.66
            2.3计算每个伸缩项最终的宽度
            伸缩项的宽度 + 需要的份数 * 每份的宽度

            注意点:
            flex-grow默认值是0
            */
  flex-grow: 1;
  /*100 + 1 * 16.66 = 116.66*/
}
ul > li:nth-child(2) {
  background-color: skyblue;
  flex-grow: 2;
  /*100 + 2 * 16.66 = 133.3*/
}
ul > li:nth-child(3) {
  background-color: yellow;
  flex-grow: 3;
  /*100 + 3 * 16.66 = 149.8*/
}
</style>