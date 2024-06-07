<template>
  <div>
    <div>{{ object1.nameList }}</div>
  </div>
</template>

<script>
import object1 from "./js/exportDefault/object.js";
export default {
  name: "home",
  data() {
    return {
      object1,
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
