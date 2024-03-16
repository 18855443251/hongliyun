<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2021-08-02 17:21:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vueDemo\src\components\son.vue
-->
<template>
  <div>
    <div>son2</div>
    <div @click="change">{{ text }}</div>
    <div v-for="(item, index) in sonList" :key="index">
      <div>{{ item.name }}</div>
    </div>
    <!-- <div class="fn-myFinance-tab">
      <div
        v-for="(item, index) in tabList"
        :key="index"
        @click="switchTab(index)"
      >
        <span :class="item.type ? 'ft-cl-org' : ''">{{ item.text }}</span>
        <div class="line-div"></div>
      </div>
    </div>-->
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    sonList: {
      type: Array,
      default: [],
    },
    formData: {
      type: Object,
      defalut: () => {
        return {};
      },
    },
  },
  data() {
    return {
      age: "55",
    };
  },
  watch: {
    formData: {
      handler: function (newName, oldName) {
        if (JSON.stringify(newName) != "{}" && newName != oldName) {
          this.$nextTick(() => {
            console.log("新增");
          });
        }
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    console.log("son2");
  },
  methods: {
    change() {
      this.$emit("fachange", this.age);
    },
    switchTab(index) {
      for (let a in this.tabList) {
        if (a == index) {
          this.$set(this.tabList[a], "type", true);
          this.$emit("input", index);
        } else {
          this.$set(this.tabList[a], "type", false);
        }
      }
    },
  },
};
</script>
