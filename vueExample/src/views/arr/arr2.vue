<template>
  <div>
    <div v-for="(item, index) in newBankList" :key="index">
      {{ item.phone }}/{{ item.Bankname }}
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      newList: [
        { Bankname: "张三", age: 55 },
        { Bankname: "李四", age: 14 },
      ],
      playerList1: [
        { phone: "188555", add: "北京" },
        { phone: "99555", add: "广州" },
      ],
      newBankList: [
        // { phone: "188555", add: "北京" },
        // { phone: "99555", add: "广州" },
        // { Bankname: "张三", age: 55 },
        // { Bankname: "李四", age: 14 }
      ],
    };
  },
  created() {
    this.formatBankList(this.newList);
  },
  methods: {
    formatBankList(newList) {
      this.newBankList = [...this.playerList1, ...newList];
      console.log(JSON.stringify(this.newBankList));
    },
  },
};
</script>

<style scoped></style>
