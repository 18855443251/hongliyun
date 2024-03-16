<template>
  <div>
    <div>{{ message }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "子组件的值",
    };
  },
  methods: {
    test(){
        console.log('哈哈')
    }
  },
};
</script>
