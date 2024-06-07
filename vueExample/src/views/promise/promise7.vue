<template>
  <div>
    <div>
      <input type="text" v-model="contentType.typeContent" placeholder="请输入内容" />
      <input type="number" v-model="contentType.typeNumber" placeholder="请输入数字" />
    </div>
    <div class="view">
      <div>
        <p
          v-for="(item, index) in dataList.length/2"
          :key="index"
          class="type"
        >{{contentType.typeContent}}</p>
      </div>
      <div>
        <input
          class="input"
          type="number"
          placeholder="请输入"
          v-for="(itm, idx) in dataList"
          :key="idx+'1'"
          v-model="itm.value"
          @change="ipt($event,itm,idx)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import debounce from "@/utils/debounce.js";
export default {
  data() {
    return {
      contentType: {
        typeContent: "",
        typeNumber: "",
      },
      dataList: [],
    };
  },
  watch: {
    contentType: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val.typeContent && val.typeNumber != 0) {
          this.dataList = [];
          let obj1 = {
            value: "",
          };
          for (let index = 0; index < val.typeNumber * 2; index++) {
            this.dataList.push(JSON.parse(JSON.stringify(obj1)));
          }
        } else {
          this.dataList = [];
        }
      },
    },
  },
  mounted() {
    // this.ipt = debounce(this.ipt, 3000, 1);
  },
  methods: {
    ipt(el, item, index) {
      console.log(123456);
      if (index != 0) {
        if (item.value && item.value < this.dataList[index - 1].value) {
          this.$set(
            this.dataList[index],
            "value",
            this.dataList[index - 1].value
          );
        }
      }
    },
  },
};
</script>

<style scoped>
.view {
  display: flex;
}

.input {
  width: 328px;
}

.type {
  white-space: nowrap;
  margin-right: 30px;
}
</style>
