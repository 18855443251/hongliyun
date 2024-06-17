<!--
 * @Author: your name
 * @Date: 2022-03-15 16:47:37
 * @LastEditTime: 2022-06-15 15:56:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \root\bank\src\views\appCenter\appCenter.vue
-->
<template>
  <div ref="main_view" style="background: #f3f3f3">
    <!-- 导航头 -->
    <nav-bar title="应用中心" ref="navBar" rightTitle="管理"></nav-bar>
    <!-- 我的应用 -->
    <div ref="my-app" class="my_app">
      <p class="title">我的应用</p>
      <div v-if="myAppList.length > 0">
        <!-- 拖拽 -->
        <draggable
          :options="{ delay: 300 }"
          v-model="myAppList"
          v-bind="dragOptions"
          @start="startBtn"
          @end="endBtn"
        >
          <transition-group name="flip-list" tag="div" class="section_box">
            <div
              class="box_img"
              v-for="(item, index) in myAppList"
              :key="index"
            >
              <img src="@/assets/img/agree.png" alt class="img" />
              <p class="img_desc">{{ item.appName }}</p>
            </div>
          </transition-group>
        </draggable>
      </div>
      <div v-else class="nodata">暂无数据</div>
    </div>
    <!-- 热门应用和推荐应用 -->
    <slideBar
      :rmAppList="rmAppList"
      :tjAppList="tjAppList"
      ref="slideBar"
      class="slideBar"
      @goDetail="goDetail"
    ></slideBar>
    <!-- 应用分类切换 -->
    <div
      ref="tab-box"
      class="tab_box"
      :style="{
        top:
          rightTitle == '管理'
            ? navBarHeight - 2 + 'px'
            : myAppHeight + navBarHeight + slideBarHeight - 2 + 'px',
      }"
    >
      <md-tab-bar
        v-model="current"
        :hasInk="false"
        :items="appClassList"
        :maxLength="5"
        @change="tabBtn"
        :inkLength="50"
      />
    </div>
    <!-- 应用分类列表 -->
    <div
      class="classList"
      :style="{ paddingBottom: paddingBottom + 20 + 'px' }"
    >
      <div
        class="classList_item"
        v-for="(item, index1) in appClassList"
        :key="index1"
        :ref="item.classId"
      >
        <p class="title">{{ item.label }}</p>
        <div class="section_box">
          <div
            class="box_img"
            v-for="(sub, index2) in item.appList"
            :key="index2"
          >
            <img src="@/assets/img/agree.png" alt class="img" />
            <p class="img_desc">{{ sub.appName }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ActivityIndicator, TabBar } from "mand-mobile";
import draggable from "vuedraggable";
import navBar from "@/components/navBar";
import slideBar from "./components/slideBar";
import debounce from "@/utils/debounce.js";
import "@/utils/mixins/myTool.js";
export default {
  components: {
    draggable,
    navBar,
    slideBar,
    [ActivityIndicator.name]: ActivityIndicator,
    [TabBar.name]: TabBar,
  },
  data() {
    return {
      current: 1, //tab标签索引
      bgColor: "#f3f3f3", //导航背景颜色
      title: "应用中心",
      leftTitle: "", //取消
      rightTitle: "管理",
      leftImgUrl: require("@/assets/img/agree.png"),
      myAppList: [
        { appName: "公务用车" },
        { appName: "公务用车" },
        { appName: "公务用车" },
        { appName: "公务用车" },
        { appName: "公务用车" },
      ], //我的应用
      appClassList: [
        {
          name: 1,
          label: "标签一",
          classId: "class01",
          appList: [
            {
              appName: "公务用车1",
            },
          ],
        },
        {
          name: 2,
          label: "标签二",
          classId: "class02",
          appList: [
            {
              appName: "公务用车2",
            },
          ],
        },
        {
          name: 3,
          label: "标签三",
          classId: "class03",
          appList: [
            {
              appName: "公务用车3",
            },
          ],
        },
        {
          name: 4,
          label: "标签四",
          classId: "class04",
          appList: [
            {
              appName: "公务用车4",
            },
          ],
        },
      ], //所有应用
      toastMsg: "", //吐司文本
      dragOptions: {
        animation: 200,
      },
      viewFn: null,
      paddingBottom: 800,
      clientHeight: 0, //屏幕高度
      myAppHeight: 0, //我的应用高度
      navBarHeight: 0, //导航高度
      slideBarHeight: 0, //推荐和热门高度
      tabBoxHeight: 0, //分类标签高度
      rmAppList: [], //热门应用
      tjAppList: [], //推荐应用
      scrollTop: "",
      imgSrc: "",
    };
  },
  mounted() {
    this.navBarHeight = this.$refs["navBar"].$el.clientHeight; //导航高度
    this.slideBarHeight = this.$refs["slideBar"].$el.clientHeight; //推荐和热门高度
    this.clientHeight = myTool.client().height; //屏幕高度
    this.tabBoxHeight = this.$refs["tab-box"].offsetHeight; //分类标签高度
    setTimeout(() => {
      this.appclassListCompute();
    }, 100);
    window.addEventListener("scroll", this.viewScroll);
    this.viewFn = debounce(
      (e) => {
        this.scrollTop = myTool.scroll().top;
        this.getIndex(this.scrollTop);
      },
      100,
      1,
      this
    );
  },
  methods: {
    // 滚动切换标签
    getIndex(scrollTop) {
      let lastIndex = this.appClassList.length - 1;
      this.appClassList.forEach((item, index) => {
        if (this.rightTitle == "管理") {
          if (
            scrollTop >= item["offsetEdit"][0] &&
            scrollTop <= item["offsetEdit"][1]
          ) {
            this.current = index + 1;
            this.paddingBottom =
              this.clientHeight -
              this.tabBoxHeight -
              this.navBarHeight -
              this.appClassList[lastIndex].offsetEdit[2];
          }
        } else if (this.rightTitle == "保存") {
          if (
            scrollTop >=
              item["offsetEdit"][0] - this.myAppHeight - this.slideBarHeight &&
            scrollTop <=
              item["offsetEdit"][1] - this.myAppHeight - this.slideBarHeight
          ) {
            this.current = index + 1;
            this.paddingBottom =
              this.clientHeight -
              this.tabBoxHeight -
              this.slideBarHeight -
              this.myAppHeight -
              this.navBarHeight -
              this.appClassList[lastIndex].offsetEdit[2];
          }
        }
      });
    },
    // 滚动
    viewScroll(e) {
      this.viewFn(e);
    },
    appclassListCompute() {
      //获取我的应用高度
      this.myAppHeight = this.$refs["my-app"].offsetHeight;
      // 获取各个模块距离
      this.getDistance();
    },
    //获取每个模块距离页面顶部的距离
    getDistance() {
      let lastIndex = this.appClassList.length - 1;
      let offsetTop = 0;
      let offsetHeight = 0;
      this.appClassList.forEach((item, index) => {
        // 5是marginTop的距离
        offsetTop =
          this.$refs[item.classId][0].offsetTop -
          5 -
          this.tabBoxHeight -
          this.navBarHeight;
        offsetHeight = this.$refs[item.classId][0].offsetHeight + 5;
        // 第一项
        if (index == 0) {
          this.$set(this.appClassList[index], "offsetEdit", [
            0,
            offsetTop + offsetHeight,
            offsetHeight,
          ]);
          // 最后一项
        } else if (index == lastIndex) {
          this.$set(this.appClassList[index], "offsetEdit", [
            offsetTop,
            offsetTop + offsetHeight + this.paddingBottom,
            offsetHeight,
          ]);
        } else {
          this.$set(this.appClassList[index], "offsetEdit", [
            offsetTop,
            offsetTop + offsetHeight,
            offsetHeight,
          ]);
          offsetTop += offsetHeight;
        }
      });
    },

    // 管理
    edit() {
      this.rightTitle = "保存";
      this.leftTitle = "取消";
      this.leftImgUrl = "";
      this.title = "管理应用";
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    // 保存
    save() {
      this.rightTitle = "管理";
      this.leftImgUrl = require("@/assets/img/agree.png");
      this.leftTitle = "";
      this.title = "应用中心";
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    // 开始拖拽
    startBtn() {
      this.edit();
    },
    endBtn(item) {},
    // 分类标签切换
    tabBtn(item, index) {
      let offsetTop = 0;
      if (this.rightTitle == "管理") {
        this.paddingBottom =
          this.clientHeight -
          this.tabBoxHeight -
          this.navBarHeight -
          item.offsetEdit[2];
        offsetTop = item.offsetEdit[0];
      } else if (this.rightTitle == "保存") {
        this.paddingBottom =
          this.clientHeight -
          this.tabBoxHeight -
          this.slideBarHeight -
          this.myAppHeight -
          this.navBarHeight -
          item.offsetEdit[2];
        offsetTop = item.offsetEdit[0] - this.myAppHeight - this.slideBarHeight;
      }
      this.$nextTick(() => {
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      });
    },
    // 用户点击应用统计
    statistics(item) {
      this.$axios
        .post(
          "backstageBehaviorAnalysis.do",
          {
            appId: item.appId,
            appName: item.appName,
            appLogoPc: item.appLogoPc,
            appLogoApp: item.appLogoApp,
            appType: item.appType,
            verVersion: item.verVersion,
            appStatus: item.appStatus,
            appDescribe: item.appDescribe,
            verStatus: item.verStatus,
            detEmpNo: this.$store.state.userInfo.empid,
            appPreviewPicture: item.appPreviewPicture,
            verId: item.verId,
            relDataDate: item.relDataDate,
            relStatus: item.relStatus,
            verDataDate: item.verDataDate,
          },
          { disableOverLayShow: true, customErrorHandling: true }
        )
        .then((res) => {})
        .catch((error) => {
          console.log("处理异常");
        });
    },
    goDetail(item) {
      if (item.appLogoApp && item.appLogoApp.includes("base64")) {
        item.appLogoApp = "";
      }
      this.statistics(item);
      this.autoTrackVue({
        webpage: "我的应用", //页面
        module: item.appName, //模块
        action: "我的应用[1级]-" + item.appName, //行为
      });
      this.launchStage("bank.appDetail?data=" + JSON.stringify(item));
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}
.title-area >>> .title-right-text {
  color: #333333;
}
.my_app {
  width: 686px;
  margin-left: 32px;
  padding: 32px 0;
  background-color: #ffffff;
}
.save {
  position: sticky;
  /* top: 160px; */
  z-index: 2;
}

.classList_item {
  width: 686px;
  margin-left: 32px;
  padding: 32px 0;
  background-color: #ffffff;
  margin-top: 10px;
  border-radius: 8px;
}
.title {
  margin-left: 32px;
  font-weight: 700;
}
.section_box {
  width: 686px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10px;
}
.box_img {
  width: 171px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  position: relative;
}
.img {
  width: 70px;
  height: 70px;
}
.img_desc {
  color: #333333;
  font-size: 24px;
  margin-top: 16px;
  text-align: center;
  word-break: break-all;
  padding: 0 20px;
}
.status {
  position: absolute;
  top: -15px;
  right: 20px;
  width: 40px;
  height: 30px;
  border-radius: 30px;
  background-color: #ffffff;
}
.status_img {
  width: 30px;
  height: 30px;
  margin-left: 1px;
  border-radius: 50px;
}
.tab_box {
  position: sticky;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #f3f3f3;
}
.slideBar {
  position: sticky;
  left: 0;
  right: 0;
  z-index: 2;
}
.md-tab-bar {
  height: 82px;
  background-color: #f3f3f3;
}
.md-tab-bar /deep/.md-tab-bar-list {
  display: inline-block;
}
.md-tab-bar /deep/ .md-tab-bar-item.is-active {
  color: #333333 !important;
  font-weight: 700;
}
.md-tab-bar /deep/ .md-tab-bar-ink {
  background: #333333;
  height: 1px;
}
.md-toast >>> .md-popup-box {
  color: red;
  width: 390px;
  height: 120px;
  position: absolute;
  top: 400px;
}
.md-toast >>> .md-toast-content {
  font-size: 24px;
}
.icon {
  position: relative;
  width: 32px;
  height: 32px;
}
.nodata {
  margin: 32px;
}
.new_img,
.jian_img {
  width: 28px;
  height: 23px;
  position: absolute;
  top: 8px;
  left: 46px;
}
</style>
