<!--
 * @Author: your name
 * @Date: 2021-08-20 15:29:38
 * @LastEditTime: 2022-06-17 14:10:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\empty.vue
-->
<template>
  <div class="claneCache_view"></div>
</template>
<script>
export default {
  name: "claneCache",
  data() {
    return {
      name: "",
    };
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      let promise0 = [{ name: "张三" }];
      let promise1 = [{ age: "18" }];
      let promiseArr = [promise0, promise1];
      Promise.all(promiseArr)
        .then((res) => {
          let params = { ...res[0][0], ...res[1][1] };
          return params;
        })
        .then((res) => {
            console.log(res,'哈哈')
        });
    },
  },
};
</script>
<style scoped></style>
