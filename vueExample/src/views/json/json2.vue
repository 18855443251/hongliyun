<!--
 * @Author: your name
 * @Date: 2020-10-13 18:11:56
 * @LastEditTime: 2022-05-30 10:47:02
 * @LastEditors: Please set LastEditors
 * @Description: json导入
 * @FilePath: \vueDemo\src\views\json\json1.vue
-->
<template>
  <div>
    <div v-for="(item, index) in FundUsageArr" :key="index">
      {{ item.text }}
    </div>
    <div v-for="(item, index) in REPAY_TYPE_LIST" :key="'step' + index">
      {{ item.text }}
    </div>
    <div>{{ LIST_CONFIG_TYPE }}</div>
    <div>{{ $tableMapList(name) }}</div>
    <div>{{struct.sendTypeList}}</div>
  </div>
</template>

<script>
import {
  FundUsageArr,
  REPAY_TYPE_LIST,
  LIST_CONFIG_TYPE,
} from "@/common/js/config.js";
// import { FundUsageArr, REPAY_TYPE_LIST } from "@/common/js/config1.js";
import * as struct from "@/common/js/message.js";
// import {sendTypeList,statusList} from "@/common/js/message.js";
import Msg from "@/common/js/msg";
export default {
  name: "home",
  data() {
    return {
      FundUsageArr,
      REPAY_TYPE_LIST,
      LIST_CONFIG_TYPE,
      name: "",
      struct,
      // sendTypeList,
      // statusList
    };
  },
  created() {
    // Msg.Confirm("该文件过大，请退出后稍后再试", () => {
    //   console.log("好好");
    // });
     Msg.Confirm({
      icon:'',
      title:'温馨提示',
      content:'何恢复',
      confirmText:'查看'
     }, () => {
      console.log("好好");
    });
  },
  methods: {},
};
</script>

<style scoped></style>
