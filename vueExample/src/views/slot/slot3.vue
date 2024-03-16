
<template>
  <div class="cardBox_view">
    <div>作用域插槽</div>
    <test>
      <!-- obj可以写成任意字符串 -->
       <!-- 默认插槽的简便写法v-slot:default="obj" == v-slot="obj" -->
     <template v-slot:default="obj">
       <div>{{obj}}</div>
       <div v-for="(item,index) in obj.option" :key="index">
         {{item.desc}}
       </div>
       <br/>
     </template>  
    </test>
  </div>
</template>
<script>
import test from "./components/test3";
export default {
  components: { test },
  name: "Login",
  data() {
    return {};
  },

  methods: {},
};
</script>
<style scoped>
</style>
