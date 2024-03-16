<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 09:57:05
 * @LastEditors: Please set LastEditors
 * @Description: Object.assign合并对象
 * @FilePath: \vueDemo\src\views\arr\hebingArr.vue
-->
<template>
  <div>
    <div @click="test1">Object.assign合并对象</div>
    <div @click="test2">...合并对象</div>
    <div @click="test3">Object.assign合并数组</div>
    <div @click="test4">Object.assign合并数组</div>
    <div @click="test5">Object.assign合并数组</div>
    <div @click="test6">Object.keys处理对象</div>
    <div @click="test7">Object.keys处理数组</div>
    <div @click="test8">Object.keys处理字符串</div>
    <div @click="test9">Object.values</div>
    <div @click="test10">Object.values和Object.keys</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      target: { a: 1 },
      source1: { b: 2 },
      source2: { c: 3 },
      data: {},
      data1: [],
      data2: [],
      arr1: [1, 2, 3],
      arr2: [4, 5],
      arr3: [3, 4, 5],
      refsList: {
        business: {
          age: 30,
          name: "业务早报",
          isNew: true,
        },
        agency: { age: 60, name: "机构存贷款", isNew: false },
      },
    };
  },
  methods: {
    test1() {
      this.data = Object.assign(this.target, this.source1, this.source2);
      console.log(JSON.stringify(this.data)); //{"a":1,"b":2,"c":3}
    },
    test2() {
      this.data = { ...this.target, ...this.source1, ...this.source2 };
      console.log(JSON.stringify(this.data)); //{"a":1,"b":2,"c":3}
    },
    test3() {
      // ，Object.assign把数组视为属性名为 0、1、2 的对象，因此源数组的 0 号属性4覆盖了目标数组的 0 号属性1
      this.data1 = Object.assign([1, 2, 3], [4, 5]);
      console.log(JSON.stringify(this.data1)); //[4,5,3]
    },
    test4() {
      this.data1 = [...this.arr1, ...this.arr2];
      console.log(JSON.stringify(this.data1)); //[1,2,3,4,5]
    },
    test5() {
      this.data2 = [...this.arr1, ...this.arr3];
      console.log(JSON.stringify(this.data2)); //[1,2,3,3,4,5]
    },
    test6() {
      // 处理对象，返回可枚举的属性数组
      let person = {
        name: "张三",
        age: 25,
        address: "深圳",
        getName: function () {},
      };
      console.log(JSON.stringify(Object.keys(person))); //["name","age","address","getName"]
    },
    test7() {
      //处理数组，返回索引值数组
      let arr = [1, 2, 3, 4];
      console.log(JSON.stringify(Object.keys(arr))); //["0","1","2","3"]
    },
    test8() {
      //处理字符串，返回索引值数组
      let str = "hello你";
      console.log(JSON.stringify(Object.keys(str))); //["0","1","2","3","4","5"]
    },
    test9() {
      let obj = {
        foo: "张三",
        baz: 20,
      };
      console.log(JSON.stringify(Object.values(obj))); //["张三",20]
    },
    test10() {
      // [{"age":30,"name":"业务早报"},{"age":60,"name":"机构存贷款"}]
      // console.log(JSON.stringify(Object.values(this.refsList)));
      //["business","agency"]
      // console.log(JSON.stringify(Object.keys(this.refsList)));
      let newArr = Object.keys(this.refsList).filter((item, index) => {
        // console.log(JSON.stringify(this.refsList[item])); //{"age":30,"name":"业务早报","isNew":true}和{"age":60,"name":"机构存贷款","isNew":false}
        return this.refsList[item].isNew == true;
      });
      console.log(JSON.stringify(newArr)); //["business"]
    },
  },
};
</script>

<style scoped></style>
