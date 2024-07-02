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
    <div @click="test">测试</div>
  </div>
</template>
<script>
import navBar from "@/components/navBar";
export default {
  name: "claneCache",
  components: { navBar },
  data() {
    return {
      scenNoList: ["ZF", "GS", "LS", "YG", "CFJL", "WYH", "GLH", "KHJL"], // 场景列表
      tag:['gh',"GdS",'2'],
      scenNo:'',
      businessType:''
    };
  },
  created() {
    if (this.tag && this.tag.length > 0) {
        // 获取场景
        let list = this.tag;
        for (let i = 0; i < list.length - 1; i++) {
          if (this.scenNoList.includes(list[i])) {
            this.scenNo = list[i];
            break;
          }
        }
        if (this.scenNo == "GS") {
          this.businessType = "01";
        } else if (this.scenNo == "LS") {
          this.businessType = "02";
        }else{
            this.businessType = "03"; 
        }
        console.log(this.scenNo,this.businessType,'哈哈')
      }
  },
  methods: {

  },
};
</script>
<style scoped></style>
