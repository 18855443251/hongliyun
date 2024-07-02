<template>
  <div>
    <div v-for="(item, index) in newList" :key="index">{{ item.Bankname }}</div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      oldList: [
        { Bankname: "张三", age: 55 },
        { Bankname: "李四", age: 14 },
        { Bankname: "王五", age: 14 },
      ],
      newList: [],
    };
  },
  created() {
    // this.test();
    // this.test1();
    this.test2();
  },
  methods: {
    test() {
      // 允许callback更改原始数组的元素
      // forEach中可以使用return跳出循环,不能终止循环
      // return不能终止循环，只是将满足条件的跳过了。
      // forEach没有返回值 foreach的所有返回值都是undefined。
      // 要想有返回值，需要另声明一个变量接收。
      // .如果遍历的是个空数组，则不进行遍历。
      this.oldList.forEach((item, index, arr) => {
        if (item.Bankname == "李四") {
          item.Bankname = "修改";
          // return;
        }
        console.log(item, "当前项"); //会打印两次
      });
      this.newList = this.oldList;
      console.log(this.oldList, "修改item里的属性会改变原数组");
    },
    test1() {
       this.oldList.forEach((item, index, arr) => {
        //  let obj=JSON.parse(JSON.stringify(item));//深拷贝不会改变原始数组oldList,不会改变arr
        let obj=item;//浅拷贝会改变原始数组oldList,也会改变arr
        obj.value=index;
        obj.Bankname="借记卡";
        // return obj //没有返回值不能这样写
      });
      this.newList=this.oldList
      console.log(this.newList, "原始数组oldList改变,newList跟着改变"); 
    },
    test2() {
      // try/catch可以让js代码遇到错误了也可以执行下去
      try {
        this.oldList.forEach((item) => {
          if (item.Bankname == "李四") {
            throw "遇到李四才终止循环";
          }
          console.log(item, "当前项"); //会打印一次
        });
      } catch (e) {
        console.log("catch-" + e); //会被打印
      }
    },
  },
};
</script>

<style scoped></style>
