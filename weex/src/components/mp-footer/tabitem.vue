<template>
  <div :style="{ backgroundColor: backgroundColor }" class="container" @click="onclickitem">
    <text v-if="index==tabberSignIndex[index]" class="signFlag"></text>
    <image :src="icon" class="tab_icon" />
    <text :style="{ color: titleColor }" class="tab_text">{{title}}</text>
  </div>
</template>

<style scoped>
.container {
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100px;
}
.tab_icon {
  margin-top: 5px;
  width: 48px;
  height: 48px;
}
.signFlag {
  position: absolute;
  z-index: 99;
  right: 40px;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
}
.tab_logo {
  margin-top: 5px;
  width: 228px;
  height: 50px;
}
.tab_text {
  margin-top: 5px;
  text-align: center;
  font-size: 24px;
  color: rgb(136, 136, 136);
}
</style>

<script>
export default {
  data() {
    return {};
  },
  props: {
    index: { default: 0 },
    tabberSignIndex: { default: [] },
    title: { default: "" },
    titleColor: { default: "" },
    icon: { default: "" },
    backgroundColor: { default: "#ffffff" },
  },
  methods: {
    onclickitem: function (e) {
      var params = {
        index: this.index,
      };
      this.$emit("tabItemOnClick", params);
    },
  },
};
</script>
