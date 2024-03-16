<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-03 14:08:10
 * @LastEditors: Please set LastEditors
 * @Description: 从1到30
 * @FilePath: \vueDemo\src\views\all.vue
-->
<template>
  <div>
    <h2>对象遍历</h2>
    <div v-for="(value, key, index) in obj1" :key="value">
      {{ value }}-{{ key }}-{{ index }}
    </div>
    <div>
      <h2>数组遍历</h2>
      <div v-for="(value, index) in arr2" :key="index">
        {{ value }}-{{ index }}
      </div>
      <div>
        <h2>数组遍历</h2>
        <div v-for="(item, index) in arr3" :key="index">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      pickerData1: [],
      obj1: {
        name: "张三",
        age: "15",
        sex: "男",
      },
      arr1: [
        {
          name: "李四",
          age: "58",
        },
        {
          name: "王五",
          age: "99",
        },
        {
          name: "赵六",
          age: "99",
        },
      ],
      arr2: ["张三", "李四", "王五"],
      arr3: [
        {
          name: "西瓜",
          age: "15",
        },
        {
          name: "桃子",
          age: "15",
        },
      ],
    };
  },
  created() {
    // this.test1();
    // this.test3();
    // this.test4();
    // this.test5();
    this.test6();
  },
  methods: {
    // for of是对数值遍历的，不能遍历对象，可以遍历数组
    // for in 遍历数组遍历的是索引
    // for of 遍历数组遍历的是值
    //  for…of 遍历获取的是对象的键值，for…in 获取的是对象的键名；
    //普通的for循环能使用break、continue、 return跳出循环
    // break return满足条件直接终止for循环，continue跳出当前循环并继续下一个for循环
    // for of 如果遍历一个数组对象（数组类型是引用类型），改变数组中的值会返回新数组，原数组会改变
    // for of 如果遍历一个数组(数组元素是值类型)，改变数组中的值原数组不会改变
    // for in 如果遍历一个数组(或是数组对象)，改变数组中的值原数组都会改变

    test1() {
      for (let key in this.obj1) {
        // if (key == "age") {
        //   return;
        // }
        console.log(key, "key");
      }
    },
    test3() {
      for (let item of this.arr1) {
        if (item.name == "王五") {
          item.name = "修改";
          // return;
        }
        console.log(item, "当前项"); //只打印一次
      }
      console.log(
        this.arr1,
        "如果遍历一个数组对象，改变数组中的值原数组会改变"
      );
    },
    test4() {
      for (let value of this.arr2) {
        if (value == "李四") {
          value = "修改";
        }
        console.log(value, "value");
      }
      console.log(
        this.arr2,
        "如果遍历一个数组(不是数组对象)，改变数组中的值原数组不会改变"
      );
    },
    test5() {
      for (let index in this.arr2) {
        // if (index == 1) {
        //   this.arr2[index] = "修改";
        // }
        console.log(index, "索引");
      }
      console.log(
        this.arr2,
        "如果遍历一个数组(或是数组对象)，改变数组中的值原数组都会改变"
      );
    },
    test6() {
      for (let index in this.arr1) {
        if (index == 1) {
          this.arr1[index].name = "修改";
        }
        console.log(index, "索引");
      }
      console.log(
        this.arr1,
        "如果遍历一个数组(或是数组对象)，改变数组中的值原数组都会改变"
      );
    },
  },
};
</script>

<style scoped>
</style>
