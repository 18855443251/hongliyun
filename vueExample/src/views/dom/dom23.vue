<!--
 * @Author: your name
 * @Date: 2021-08-12 15:06:34
 * @LastEditTime: 2022-08-04 10:39:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\VxMobile.vue
-->
<template>
  <div class="claneCache_view">
    <div class="tab">
      <div class="tab_list">
        <ul>
          <li class="current">商品介绍</li>
          <li>规格与包装</li>
          <li>售后保障</li>
          <li>商品评价（50000）</li>
          <li>手机社区</li>
        </ul>
      </div>
      <div class="tab_con">
        <div class="item" style="display: block">商品介绍模块内容</div>
        <div class="item">规格与包装模块内容</div>
        <div class="item">售后保障模块内容</div>
        <div class="item">商品评价（50000）模块内容</div>
        <div class="item">手机社区模块内容</div>
      </div>
    </div>
  </div>
</template>
<script>
import navBar from "@/components/navBar";
export default {
  name: "claneCache",
  components: { navBar },
  data() {
    return {};
  },
  mounted() {
    // 获取元素
    var tab_list = document.querySelector(".tab_list");
    var lis = tab_list.querySelectorAll("li");
    var items = document.querySelectorAll(".item");
    // for循环绑定点击事件
    for (var i = 0; i < lis.length; i++) {
      // 开始给5个小li 设置索引号
      lis[i].setAttribute("index", i);
      lis[i].onclick = function () {
        // 1. 上的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变（排他思想） 修改类名的方式
        // 干掉所有人 其余的li清除 class 这个类
        for (var i = 0; i < lis.length; i++) {
          lis[i].className = "";
        }
        // 留下我自己
        this.className = "current";
        // 2. 下面的显示内容模块
        var index = this.getAttribute("index");
        console.log(index);
        // 干掉所有人 让其余的item 这些div 隐藏
        for (var i = 0; i < items.length; i++) {
          items[i].style.display = "none";
        }
        // 留下我自己 让对应的item 显示出来
        items[index].style.display = "block";
      };
    }
  },
  methods: {},
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

.tab {
  width: 978px;
  margin: 100px auto;
}

.tab_list {
  height: 39px;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

.tab_list li {
  float: left;
  height: 39px;
  line-height: 39px;
  padding: 0 20px;
  text-align: center;
  cursor: pointer;
}

.tab_list .current {
  background-color: #c81623;
  color: #fff;
}

.item_info {
  padding: 20px 0 0 20px;
}

.item {
  display: none;
}
</style>