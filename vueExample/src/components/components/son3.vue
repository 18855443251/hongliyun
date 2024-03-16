<template>
  <div>
    <div @click="changeFather">改变父亲的值</div>
    <p>{{ sonName }}</p>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
    default: "",
  },
  data() {
    return {
      sonName: "儿子",
    };
  },
  methods: {
    changeFather() {
      // this.$parent.fatherName="赵六";
      this.sonName = this.$parent.fatherName;
    },
  },
};
</script>
