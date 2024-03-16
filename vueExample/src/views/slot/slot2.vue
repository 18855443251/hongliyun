
<template>
  <div class="cardBox_view">
    <div>作用域插槽</div>
    <test>
     <template slot-scope="{option}">
       <span>{{option.desc}}</span>
      </template>
    </test>
  </div>
</template>
<script>
import test from "./components/test2";
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
