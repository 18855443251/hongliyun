<!--
 * @Author: your name
 * @Date: 2022-04-12 11:07:27
 * @LastEditTime: 2023-03-07 13:30:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dtapp\bank\src\views\appCenter\components\slideBar.vue
-->
<template>
  <div>
    <div class="main">
      <div class="main_List">
        <!-- 推荐应用 -->
        <div class="main_item">
          <div class="main_header" @click="more('0')">
            <div class="title">推荐应用</div>
            <div class="header_right">
              <span>更多</span>
            </div>
          </div>
          <div style="display:flex;flex-direction:row;flex-wrap:wrap">
            <div v-for="(item,index) in tjList.slice(0,4)" :key="index" @click="goDetail(item)" class="app_item">
              <div class="main_content" v-if="index<2">
                <div class="content_img">
                  <!-- 1 是荐，2是新-->
                </div>
                <div>
                  <div class="main_title">{{ellipsis(item.appName,10)}}</div>
                  <div class="main_desc">{{ellipsis(item.appDescribe,10)}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    rmAppList: {
      type: Array,
      default: () => [],
    },
    tjAppList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      params: {},
    };
  },
  computed: {
    // 推荐应用
    tjList() {
      // return this.tjAppList.sort(this.compare("appShowOrder"));
      // return this.rmAppList.sort(this.compare("detAppCount"));
      let tjList = this.tjAppList.sort(this.compare("appShowOrder")).slice(0,2)
      let tjIdList = tjList.map(app=>app.appId)
      let rmList = this.rmAppList
        .sort(this.compare("detAppCount"))
        .filter(app=>tjIdList.indexOf(app.appId)<0)
        .slice(0,2)
      return [...tjList,...rmList]
    },
  },
  methods: {
    more() {
      let tjList = this.tjAppList.sort(this.compare("appShowOrder")).slice(0,4)
      let tjIdList = tjList.map(app=>app.appId)
      let rmList = this.rmAppList
        .sort(this.compare("detAppCount"))
        .filter(app=>tjIdList.indexOf(app.appId)<0)
        .slice(0,4)
      // 0是推荐应用
      this.params = {
        type: "0",
        appList: [...tjList,...rmList],
      };
      this.$store.state.appInfo = this.params;
      this.jump("/hotApp");
    },
    compare(prop) {
      return function (a, b) {
        let v1 = a[prop] || 0;
        let v2 = b[prop] || 0;
        return v2 - v1; // 从大到小排序
      };
    },
    goDetail(item) {
      this.$emit("goDetail", item);
    },
  },
};
</script>
<style scoped>
.main {
  overflow: hidden;
  background-color: #f3f3f3;
}
.main_List {
  white-space: nowrap;
  overflow-y: auto;
  padding: 0 32px;
  margin-top: 10px;
}
.main_item {
  width: 686px;
  display: inline-block;
  background-color: #ffffff;
  padding: 20px 10px 32px 20px;
  vertical-align: top;
  border-radius: 8px;
}
.main_content {
  margin-top: 40px;
}
.main_header,
.main_content,
.header_right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.main_header {
  justify-content: space-between;
}
.main_icon {
  width: 72px;
  height: 72px;
  margin-right: 32px;
}
.more_icon {
  width: 32px;
  height: 32px;
}
.title {
  font-size: 28px;
  color: #333333;
  font-weight: 700;
}
.header_right > span {
  font-size: 24px;
  color: #999999;
}
.main_title {
  font-size: 24px;
  color: #333333;
  word-break: break-all;
  white-space: pre-wrap;
  font-weight: 700;
}
.main_desc {
  font-size: 24px;
  color: #666666;
}
.content_img {
  position: relative;
}
.new_img,
.jian_img {
  width: 28px;
  height: 23px;
  position: absolute;
  top: 10px;
  left: -6px;
}
.app_item{
  width:314px;
}
</style>
