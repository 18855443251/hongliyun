import Vue from "vue";
const FundUsageArr = [
  // 转账用途
  {
    text: "手机银行转账",
  },
  {
    text: "工资",
  },
  {
    text: "手工录入",
  },
];
const REPAY_TYPE_LIST = [
  {
    value: "M",
    text: "最低还款",
  },
  {
    value: "F",
    text: "全额还款",
  },
];
export { FundUsageArr, REPAY_TYPE_LIST };
export const LIST_CONFIG_TYPE = [
  { value: 0, label: "不启用" },
  { value: 1, label: "启用黑名单" },
  { value: 2, label: "启用白名单" },
];
Vue.prototype.$tableMapList = (val) => {
  if (val) {
    return val;
  } else {
    return "--";
  }
};
