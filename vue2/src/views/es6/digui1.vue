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
    <div>let</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      name: "",
    };
  },
  created() {
    const obj = {
      uname: "pink",
      age: 18,
      hobby: ["乒乓球", "足球"],
      family: {
        baby: "小pink",
      },
    };
    const o = {};
    // 拷贝函数
    function deepCopy(newObj, oldObj) {
      debugger;
      for (let k in oldObj) {
        // 处理数组的问题  一定先写数组 在写 对象 不能颠倒
        if (oldObj[k] instanceof Array) {
          newObj[k] = [];
          //  newObj[k] 接收 []  hobby
          //  oldObj[k]   ['乒乓球', '足球']
          deepCopy(newObj[k], oldObj[k]);
        } else if (oldObj[k] instanceof Object) {
          newObj[k] = {};
          deepCopy(newObj[k], oldObj[k]);
        } else {
          //  k  属性名 uname age    oldObj[k]  属性值  18
          // newObj[k]  === o.uname  给新对象添加属性
          newObj[k] = oldObj[k];
        }
      }
    }
    deepCopy(o, obj); // 函数调用  两个参数 o 新对象  obj 旧对象
    console.log(o);
    o.age = 20;
    o.hobby[0] = "篮球";
    o.family.baby = "老pink";
    console.log(obj);
    console.log([1, 23] instanceof Object);
    // 复习
    // const obj = {
    //   uname: 'pink',
    //   age: 18,
    //   hobby: ['乒乓球', '足球']
    // }
    // function deepCopy({ }, oldObj) {
    //   // k 属性名  oldObj[k] 属性值
    //   for (let k in oldObj) {
    //     // 处理数组的问题   k 变量
    //     newObj[k] = oldObj[k]
    //     // o.uname = 'pink'
    //     // newObj.k  = 'pink'
    //   }
    // }
  },
  methods: {},
};
</script>

<style scoped></style>
