
<template>
  <div class="cardBox_view">
    <slot name="fistName"></slot>
    <div class="bgO" v-if="$slots.lastname">
    <slot name="lastname"></slot>
    </div>
    <div class="bgY" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="test1" v-if="$slots.right">
    <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      lastname:"张三"
    };
  },

  methods: {},
};
</script>
<style scoped>
.test1{
  background: red;
}
.bgY{
  background: blue;
}
.bgO{
  background: orange;
}
</style>
