<!--
 * @Author: your name
 * @Date: 2022-06-02 09:52:35
 * @LastEditTime: 2022-06-02 10:11:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\zujian\components\son3.vue
-->
<template>
  <div>
     <div>son3</div>
    <div @click="changeFather">改变父亲的值</div>
    <p>{{ sonName }}</p>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    default: "",
  },
  data() {
    return {
      sonName: "儿子",
    };
  },
  created() {
    console.log("son3");
  },
  methods: {
    changeFather() {
      // this.$parent.fatherName = "赵六";
      this.sonName = this.$parent.fatherName; //子组件获取父组件的值
    },
  },
};
</script>
