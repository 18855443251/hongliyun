
<template>
  <div class="claneCache_view">
    <div ref="test" @click="test">防抖</div>
  </div>
</template>
<script>
import { debounce, test3 } from "./debounce.js";
export default {
  name: "claneCache",
  data() {
    return {
      timer: null,
      // test: null,
    };
  },
  mounted() {},
  methods: {
    test:debounce(),
  },
};
</script>
<style scoped></style>

