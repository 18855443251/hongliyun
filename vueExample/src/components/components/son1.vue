<template>
  <div>
    <div>{{ message }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "改变子组件的值",
      name: "李四",
      bankList: [
        {
          bankName: "农业",
        },
        {
          bankName: "建设",
        },
      ],
    };
  },
  methods: {
    childMethods() {
      this.message = "孩子";
    },
  },
};
</script>
