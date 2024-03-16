<template>
  <div>
    <div v-for="(sub, index) in playerList" :key="index">
      <div>{{ sub.Name }}</div>
    </div>
  </div>
</template>

<script>
import object1 from "@/json/object.js";
export default {
  name: "home",
  data() {
    return {
      playerList: [
        // {
        //   title: "推荐",
        //   items: [
        //     {
        //       BankName: "中国银行",
        //       BankId: "104100000004",
        //       ClearBankId: "104100000004",
        //       age: "1",
        //       name: "中国银行",
        //       avatar: "1"
        //     },
        //     {
        //       BankName: "农业银行",
        //       BankId: "103100000026",
        //       ClearBankId: "103100000026",
        //       age: "2",
        //       name: "农业银行",
        //       avatar: "2"
        //     }
        //   ]
        // }
      ],
    };
  },
  created() {
    this.formatRecommendBank();
  },
  methods: {
    formatRecommendBank() {
      this.playerList = object1.nameList;
      console.log(JSON.stringify(this.playerList));
    },
  },
};
</script>

<style scoped></style>
