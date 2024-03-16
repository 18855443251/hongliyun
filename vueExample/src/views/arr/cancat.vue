<template>
  <div></div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    // this.test1();
    // this.test2();
    // this.test3();
    this.test4()
  },
  methods: {
    test1() {
      let arr1 = [1];
      let arr2 = [1, 3, 4, "a"];
      let arr3 = arr1.concat(arr2); //[1, 1, 3, 4, 'a']
      console.log(arr3);
    },
    // 当然若拼接的第一个数组是[]空数组，就实现了一个数组拷贝，这也是数组拷贝的一个方法，而且是深拷贝哦。
    test2() {
      let arr1 = [];
      let arr2 = [1, 3, 4, "a"];
      let arr3 = arr1.concat(arr2); //[ 1, 3, 4, 'a']
      console.log(arr3);
    },
    // 简单情况都是基本类型时
    test3() {
      const originArray = [1, 2, 3, 4, 5]; //一层数组
      const cloneArray = originArray.concat();
      console.log(cloneArray === originArray); // false
      cloneArray.push(6);
      console.log(cloneArray); // [1,2,3,4,5,6]
      console.log(originArray); //[1, 2, 3, 4, 5]
    },
    test4() {
      //有引用类型时
      const originArray = [1, [1, 2, 3], { a: 1 }]; //多层数组
      const cloneArray = originArray.concat();
      console.log(cloneArray === originArray); // false
      cloneArray[0] = 2;
      console.log(cloneArray); // [2,[1,2,3,4],{a:2}];
      console.log(originArray); // [1,[1,2,3,4],{a:2}];   修改cloneArray的第一个值不影响原数组
      cloneArray[1].push(4);
      cloneArray[2].a = 2;
      console.log(originArray); // [1,[1,2,3,4],{a:2}]   //修改cloneArray的数组和对象值时会影响原数组，说明两者的引用是同一个
    },
  },
};
</script>

<style scoped></style>
