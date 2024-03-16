<template>
  <div class="page">
    <div class="content2">
      <div class="tab_box2">
        <div
          :class="['tab_two',num2===index?'tab_click2':'']"
          v-for="(item,index) in tab2"
          :key="index"
          @click="num2=index"
        >{{item}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "thisCompletion",
  components: {},
  data() {
    return {
      tab2: ["用信体验户", "有效用信户"],
      num2: 0,
      dataList: [
        {
          actRank: 74,
        },
        {
          actRank: 4,
        },
        {
          actRank: 41,
        },
      ],
    };
  },
  watch: {
    num2: {
      handler(newV, oldV) {
        if (newV === 1) {
          this.dataList = this.dataList.sort(function (a, b) {
            return a.actRank - b.actRank;
          });
        } else {
          this.dataList = this.dataList.sort(function (a, b) {
            return a.expRank - b.expRank;
          });
        }
      },
    },
  },
  methods: {},
};
</script>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  padding-top: 88px;
}
.content2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  margin-top: 2px;
  border-top: 1px #eaeaea solid;
}

.tab_box2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px #eaeaea solid;
  width: 684px;
  margin-top: 25px;
}

.tab_two {
  font-family: Source Han Sans CN;
  font-weight: bold;
  font-size: 28px;
  color: #333333;
  padding: 8px;
}

.tab_click2 {
  border-bottom: 4px solid #f4b236;
}

.content3 {
  background-color: #ffffff;
  color: #333333;
  font-size: 28px;
  font-family: Source Han Sans CN;
  margin-bottom: 30px;
}

.list_box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title_list {
  display: flex;
  justify-content: flex-start;
  text-align: start;
  align-items: center;
  background-color: #f6f6f6;
  width: 686px;
  height: 80px;
  border: 1px #dedede solid;
  margin-top: 15px;
}

.title_list:nth-child(2) {
  margin-left: 0px;
}

.list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  width: 686px;
  height: 80px;
  border-left: 1px #dedede solid;
  border-right: 1px #dedede solid;
  border-bottom: 1px #dedede solid;
}

.list_1 {
  text-align: center;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list_2 {
  width: 275px;
  margin-left: 50px;
}

.list_3 {
  width: 151px;
}

.list_4 {
  width: 150px;
}

.index {
  width: 40px;
  height: 40px;
  border: 1px #dedede solid;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
}

.index_1 {
  background-image: linear-gradient(0deg, #ffca28 0%, #ffa302 100%);
  color: #ffffff;
  border: none !important;
}

.index_2 {
  background-image: linear-gradient(0deg, #d6d5d6 0%, #939396 100%);
  color: #ffffff;
  border: none !important;
}

.index_3 {
  background-image: linear-gradient(0deg, #cd9c6d 0%, #bd814c 100%);
  color: #ffffff;
  border: none !important;
}

.number_style {
  font-family: Objectivity;
}

.tips_box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
</style>