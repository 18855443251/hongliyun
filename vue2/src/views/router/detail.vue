    <!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-20 09:02:33
 * @LastEditors: Please set LastEditors
 * @Description:client
 * @FilePath: \vueDemo\src\views\reg\replace1.vue
    -->
<template>
  <div id="card">
    <div>
      <div>detail</div>
      <div class="test" @click="test">类选择器</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      message: "测试",
      isLeave: false,
    };
  },
  mounted() {
    console.log("第一种获取方式：", this.$route.params); //{id: '001'}
  },
  beforeRouteEnter(to, from, next) {
    if (to.params) {
      console.log("第三种获取方式：", to.params); //{id: '001'}
      console.log(to.meta);
      console.log(document.documentElement.scrollTop, "scrollTop");
      next((vm) => {
        // console.log(vm.message, "message");
        // console.log(vm.$store.state.name, "name");
        // vm.$nextTick(() => {
        //   console.log(document.getElementsByClassName("test")[0]);
        // });
        console.log(from, "from");
        // vm.goErrorPage(next);
        // 通过 `vm` 访问组件实例 相当于this
        // 此处可以请求数据
      });
    } else {
      next(); //放行
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.isLeave) {
      next();
    } else {
      const answer = "";
      // const answer = window.confirm("当前页面数据未保存，确定要离开？");
      console.log(document.documentElement.scrollTop, "scrollTop");
      console.log(to, "to");
      console.log(from, "from");
      // if (answer) {
      //   next();
      // } else {
      //   next(false);
      // }
    }
  },
  watch: {
    $route: {
      handler(newV, oldV) {
        console.log("第二种获取方式：", newV.params); //{id: '001'}
      },
      immediate: true,
    },
  },

  methods: {
    goErrorPage(next) {
      next({
        name: "main",
        query: {
          message: "登录失败，请联系科技人员！",
        },
      });
    },
    test() {
      this.jump("/router1");
    },
  },
};
</script>

<style scoped>
</style>
