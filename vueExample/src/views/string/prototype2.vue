<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 16:48:14
 * @LastEditors: Please set LastEditors
 * @Description:业务早报
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div>
    <div>原型</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      function Person() {}
      Person.prototype.name = "Kevin";
      var person = new Person();
      person.name = "Daisy";
      console.log(person.name); // Daisy
      delete person.name;
      console.log(person.name); // Kevin
    },
  },
};
</script>
<style scoped></style>
