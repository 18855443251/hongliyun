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
    <nav-bar
      :title="title"
      :leftTitle="leftTitle"
      :rightTitle="rightTitle"
      :leftImgUrl="leftImgUrl"
      @mpBarRightBtnClick="mpBarRightBtnClick"
      @mpBarLeftBtnClick="mpBarLeftBtnClick"
      :isControlBack="true"
      :bgColor="bgColor"
      ref="navBar"
    ></nav-bar>
    <!-- 我的应用 -->
    <div
      ref="my-app"
      :class="['my_app', rightTitle == '管理' ? '' : 'save']"
      :style="{ top: rightTitle == '管理' ? '' : navBarHeight + 'px' }"
    >
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
              @click="except(item, index)"
            >
              <!-- 1 是荐，2是新-->
              <img
                v-if="item.appIsRecommend == '1'"
                src="@/assets/img/agree.png"
                class="jian_img"
                alt
              />
              <img
                v-else-if="item.appIsRecommend == '2'"
                src="@/assets/img/agree.png"
                class="new_img"
                alt
              />
              <img
                :src="item.appLogoApp"
                alt
                class="img"
                @error="imgError(item)"
              />
              <p class="img_desc">{{ transNull(item.appName) }}</p>
              <!-- 删除图片 -->
              <div v-if="rightTitle == '保存'">
                <div class="status">
                  <img src="@/assets/img/agree.png" class="status_img" alt />
                </div>
              </div>
            </div>
          </transition-group>
        </draggable>
      </div>
      <div v-else class="nodata">暂无数据</div>
    </div>
    <!-- 应用分类切换 -->
    <div
      ref="tab-box"
      class="tab_box"
      :style="{
        top:
          rightTitle == '管理'
            ? navBarHeight - 2 + 'px'
            : myAppHeight + navBarHeight - 2 + 'px',
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
        <p class="title">{{ transNull(item.className) }}</p>
        <div class="section_box">
          <div
            class="box_img"
            v-for="(sub, index2) in item.appList"
            :key="index2"
            @click="addApp(sub)"
          >
            <!-- 1是荐 2是新 -->
            <img
              v-if="sub.appIsRecommend == '1'"
              src="@/assets/img/agree.png"
              class="jian_img"
              alt
            />
            <img
              v-else-if="sub.appIsRecommend == '2'"
              src="@/assets/img/agree.png"
              class="new_img"
              alt
            />
            <img :src="sub.appLogoApp" alt class="img" @error="imgError(sub)" />
            <p class="img_desc">{{ transNull(sub.appName) }}</p>
            <div v-if="rightTitle == '保存'">
              <div class="status" v-if="sub.select">
                <img src="@/assets/img/agree.png" class="status_img" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <md-toast ref="toast">{{ toastMsg }}</md-toast>
  </div>
</template>
<script>
import { Toast, ActivityIndicator, TabBar } from "mand-mobile";
import draggable from "vuedraggable";
import navBar from "@/components/navBar";
import debounce from "@/utils/debounce.js";
import "@/utils/mixins/myTool.js";
export default {
  components: {
    draggable,
    navBar,
    [Toast.component.name]: Toast.component,
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
      myAppList: [{ appName: "公务用车" }], //我的应用
      appClassList: [
        {
          className: "OA",
          appList: [{ appName: "公务用车" }], //所有应用
        },
        {
          className: "贷款计算器",
          appList: [{ appName: "公务用车" }], //所有应用
        },
        {
          className: "存款计算器",
          appList: [{ appName: "公务用车" }], //所有应用
        },
        {
          className: "存款计算器",
          appList: [{ appName: "公务用车" }], //所有应用
        },
        {
          className: "存款计算器",
          appList: [{ appName: "公务用车" }], //所有应用
        },
        {
          className: "存款计算器",
          appList: [{ appName: "公务用车" }], //所有应用
        },
      ],
      toastMsg: "", //吐司文本
      dragOptions: {
        animation: 200,
      },
      viewFn: null,
      paddingBottom: 800,
      clientHeight: 0, //屏幕高度
      myAppHeight: 0, //我的应用高度
      navBarHeight: 0, //导航高度
      tabBoxHeight: 0, //分类标签高度
      rmAppList: [], //热门应用
      tjAppList: [], //推荐应用
      scrollTop: "",
      imgSrc: require("@/assets/img/agree.png"),
    };
  },
  mounted() {
    this.navBarHeight = this.$refs["navBar"].$el.clientHeight; //导航高度
    this.clientHeight = myTool.client().height; //屏幕高度
    this.tabBoxHeight = this.$refs["tab-box"].offsetHeight; //分类标签高度
    // this.getData(); //获取数据
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
    // 图片地址访问不到
    imgError(sub) {
      sub.appLogoApp = this.imgSrc;
    },
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
            scrollTop >= item["offsetEdit"][0] - this.myAppHeight &&
            scrollTop <= item["offsetEdit"][1] - this.myAppHeight
          ) {
            this.current = index + 1;
            this.paddingBottom =
              this.clientHeight -
              this.tabBoxHeight -
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
    getData() {
      // 查询我的应用
      let myAppList = this.queryMyApp();
      // 查询所有应用
      let appClassList = this.queryApplicationList();
      Promise.all([myAppList, appClassList]).then((res) => {
        // 如果所有应用中和我的应用一样，就把所有应用的图标置为减号
        for (let element of res[0]) {
          for (let item of res[1]) {
            for (let sub of item.appList) {
              if (element.appId == sub.appId) {
                sub.select = false;
              }
            }
          }
        }
        // 我的应用
        this.myAppList = res[0];
        // 所有应用
        this.appClassList = res[1];
        setTimeout(() => {
          this.appclassListCompute();
        }, 100);
      });
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
    // 查询我的应用
    queryMyApp() {
      return new Promise((resolve) => {
        this.$axios
          .post("backstageQueryMyApplicationList.do", {
            empNo: this.$store.state.userInfo.empid,
            orgCode: this.$store.state.userInfo.centerNo,
            postId: this.$store.state.userInfo.position,
          })
          .then((res) => {
            for (let item of res.appList) {
              item.verLinkUrl = encodeURIComponent(item.verLinkUrl);
              if (this.transNull(item.appLogoApp) == "--") {
                this.$set(item, "appLogoApp", this.imgSrc);
              }
            }
            resolve(res.appList);
          });
      });
    },
    // 查询所有应用
    queryApplicationList() {
      return new Promise((resolve) => {
        this.$axios
          .post("backstageUserQueryApplicationList.do", {
            empNo: this.$store.state.userInfo.empid,
            orgCode: this.$store.state.userInfo.centerNo,
            postId: this.$store.state.userInfo.position,
          })
          .then((res) => {
            // 过滤掉所有应用中分类为空的列表
            let appClassList = res.appList.filter((item) => {
              return item.appList.length > 0;
            });
            // 一开始让所有分类都属于选中状态
            appClassList.forEach((item, index) => {
              this.$set(item, "label", item.className);
              this.$set(item, "name", index + 1);
              item.appList.forEach((sub, index) => {
                // 推荐应用
                if (sub.appIsRecommend == "1") {
                  this.tjAppList.push(sub);
                }
                // 热门应用
                this.rmAppList.push(sub);
                sub.select = true;
                sub.verLinkUrl = encodeURIComponent(sub.verLinkUrl);
                // 图片字段没有
                if (this.transNull(sub.appLogoApp) == "--") {
                  this.$set(sub, "appLogoApp", this.imgSrc);
                }
              });
            });
            resolve(appClassList);
          });
      });
    },
    // 更新我的应用
    UpdateMyApplication() {
      var appList = "";
      for (let item of this.myAppList) {
        appList = appList + "," + item.appId;
      }
      if (appList.indexOf(",") == 0) {
        appList = appList.replace(",", "");
      }
      this.$axios
        .post("backstageUpdateMyApplication.do", {
          appList: appList,
          empNo: this.$store.state.userInfo.empid,
        })
        .then((res) => {
          this.appclassListCompute();
        });
    },
    // 导航左边按钮
    mpBarLeftBtnClick() {
      if (this.leftTitle == "取消") {
        this.rightTitle = "管理";
        this.leftImgUrl = require("@/assets/img/agree.png");
        this.leftTitle = "";
        this.title = "应用中心";
        this.current = 1;
        this.rmAppList = [];
        this.tjAppList = [];
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.getData(); //取消重置初始进来的状态
      } else {
        this.goBack(); //返回
      }
    },
    // 导航右边按钮
    mpBarRightBtnClick() {
      if (this.rightTitle == "管理") {
        this.myAppHeight = this.$refs["my-app"].offsetHeight;
        this.edit();
      } else {
        this.UpdateMyApplication();
        this.save();
      }
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
    //点击我的应用删除
    except(item, index) {
      if (item.appLogoApp && item.appLogoApp.includes("base64")) {
        item.appLogoApp = "";
      }
      if (this.rightTitle == "保存") {
        if (this.myAppList.length == 1) {
          this.myToast("请至少保留一个应用");
        } else {
          for (let element of this.appClassList) {
            for (let sub of element.appList) {
              if (sub.appId == item.appId) {
                sub.select = true;
                this.myAppList.splice(index, 1);
                setTimeout(() => {
                  this.myAppHeight = this.$refs["my-app"].offsetHeight; //我的应用高度
                  this.getDistance();
                }, 100);
              }
            }
          }
        }
      } else {
        // 用户点击应用统计
        // 一级支行跳转三级支行首页标志
        if (item.verLinkUrl == "main.tripleBank") {
          context.sessionSetString("tripleBankFlag", "tripleBank");
        }
        if (this.transNull(item.verLinkUrl) != "--") {
          if (item.appType == "链接") {
            this.statistics(item);
            this.autoTrackVue({
              webpage: "我的应用", //页面
              module: item.appName, //模块
              action: "我的应用[1级]-" + item.appName, //行为
            });
            this.launchStage("main.appLink?data=" + JSON.stringify(item));
          } else if (item.appType == "H5") {
            this.autoTrackVue({
              webpage: "我的应用", //页面
              module: item.appName, //模块
              action: "我的应用[1级]-" + item.appName, //行为
            });
            this.launchStage("main.zipWebview?data=" + JSON.stringify(item));
          } else {
            this.myToast("未知的类型");
          }
        } else {
          this.myToast("无效的路径");
        }
      }
    },
    // 点击分类添加应用
    addApp(item) {
      if (item.appLogoApp && item.appLogoApp.includes("base64")) {
        item.appLogoApp = "";
      }
      // 用户点击应用统计
      if (this.rightTitle == "管理") {
        // 一级支行跳转三级支行首页标志
        if (item.verLinkUrl == "main.tripleBank") {
          context.sessionSetString("tripleBankFlag", "tripleBank");
        }
        if (this.transNull(item.verLinkUrl) != "--") {
          if (item.appType == "链接") {
            this.statistics(item);
            this.autoTrackVue({
              webpage: "我的应用", //页面
              module: item.appName, //模块
              action: "我的应用[1级]-" + item.appName, //行为
            });
            this.launchStage("main.appLink?data=" + JSON.stringify(item));
          } else if (item.appType == "H5") {
            this.autoTrackVue({
              webpage: "我的应用", //页面
              module: item.appName, //模块
              action: "我的应用[1级]-" + item.appName, //行为
            });
            this.launchStage("main.zipWebview?data=" + JSON.stringify(item));
          } else {
            this.myToast("未知的类型");
          }
        } else {
          this.myToast("无效的路径");
        }
      } else {
        // 可以选择
        if (item.select) {
          if (this.myAppList.length > 7) {
            this.toastMsg = "该区域最多只能添加8个应用请先移除后添加";
            this.$refs.toast.show();
            setTimeout(() => {
              this.$refs.toast.hide();
            }, 2000);
          } else {
            item.select = false;
            this.myAppList.push(item);
            setTimeout(() => {
              this.$nextTick(() => {
                this.myAppHeight = this.$refs["my-app"].offsetHeight; //我的应用高度
                this.getDistance();
              });
            }, 100);
          }
        }
      }
    },
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
          this.myAppHeight -
          this.navBarHeight -
          item.offsetEdit[2];
        offsetTop = item.offsetEdit[0] - this.myAppHeight;
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
