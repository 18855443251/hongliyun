<template>
  <div>
    <son5 v-model="count"></son5>
    <!-- <son5 :value="count"></son5> -->
  </div>
</template>

<script>
import son5 from "./components/son5";
export default {
  components: {
    son5,
  },
  data() {
    return {
      count: 1,
    };
  },
  created() {},
  methods: {
  
  },
};
</script>

<style scoped></style>
