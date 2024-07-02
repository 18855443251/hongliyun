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
    <div>instanceof是用来判断 A 是否为 B 的实例</div>
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
    // this.test1();
  },
  methods: {
    test() {
      function Person() {}
      console.log(Person.prototype);
      console.log(function Person() {});
      console.log([] instanceof Array);//true
      console.log({} instanceof Object);//true
      console.log(new Date() instanceof Date);//true
      console.log(new Person() instanceof Person);//true
      console.log([] instanceof Object);//true
      console.log(new Date() instanceof Object);//true
      console.log(new Person() instanceof Object);//true
      console.log(Object.prototype.toString.call(null));
      console.log(Object.prototype.toString.call([]));
      console.log(Array.isArray([]));//true
    },
    test1() {
      // 构造函数
      function Person(name) {
        if (this instanceof Person) {
          this.lastName = name;
        } else {
          return new Person(name);
        }
      }
      var x = new Person("张三");
      var y = Person("李四");
      console.log(x); //实例对象
      console.log(y); //实例对象
    },
  },
};
</script>
<style scoped></style>
