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
      // 每个对象在创建时都会自动拥有一个constructor(构造函数属性) 
      // constructor继承自原型对象 __proto__是原型对象,Person.prototype也是原型对象
      function Person(name) {
      this.name=name
      }
      var x = new Person("张三");
      console.log(x.__proto__ === Person.prototype); // true
       console.log(x.__proto__ .constructor === Person.prototype.constructor)//true
      console.log(x.constructor === Person.prototype.constructor)//true
      console.log(x.constructor===Person)//true
      console.log(Person===Person.prototype.constructor)  //true
        console.log(x.__proto__.__proto__===Object.prototype)  //true
         console.log(Person.prototype.__proto__===Object.prototype)  //true
      console.log(Object.getPrototypeOf(x) === Person.prototype) // true
    },
  },
};
</script>
<style scoped></style>
