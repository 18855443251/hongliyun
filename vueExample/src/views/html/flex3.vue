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
  width: 200px;
  height: 200px;
  background-color: pink;
  text-align: center;
  line-height: 200px;
  font-size: 35px;
}
ul > li:nth-child(1) {
  /*
            1.flex-shrink作用:
              当所有伸缩项宽度的总和比伸缩容器宽度大的时, 我们可以通过flex-shrink让系统调整伸缩项的宽度, 以便于让所有伸缩项的宽度的总和等于伸缩容器的宽度

            2.计算每个伸缩项需要压缩的宽度
            2.1计算溢出的宽度
            伸缩容器的宽度 -  所有伸缩项的宽度总和
            400 - 600 = -200
            2.2计算总权重
            每个伸缩项需要的份数 * 每个伸缩项的宽度
            1 * 200 +  2 * 200 + 3 * 200 = 1200
            2.3计算每个伸缩项需要压缩的宽度
            溢出的宽度 * 需要的份数 * 每个伸缩项的宽度 / 总权重
            -200 * 1 * 200 / 1200 = -33.33

            注意点:
            flex-shrink: 默认值是1
            */
  flex-shrink: 1;
}
ul > li:nth-child(2) {
  background-color: skyblue;
  flex-shrink: 2;
}
ul > li:nth-child(3) {
  background-color: yellow;
  flex-shrink: 3;
}
</style>