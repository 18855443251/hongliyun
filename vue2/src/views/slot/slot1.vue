<!--
 * @Author: your name
 * @Date: 2022-06-02 10:46:58
 * @LastEditTime: 2022-06-02 10:54:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\src\views\slot\shot1.vue
-->
<!--
 * @Author: your name
 * @Date: 2021-05-06 20:10:09
 * @LastEditTime: 2021-06-25 15:12:51
 * @LastEditors: Please set LastEditors
 * @Description: 旋转180
 * @FilePath: \root\glhHome\src\views\login.vue
-->
<template>
  <div class="cardBox_view">
    <test1>
      <template #header>
        <div>头部自定义插槽</div>
      </template>
      <template v-slot:left>
        <span>具名插槽左侧</span>
      </template>
      <div slot="right">具名插槽右侧</div>
      <template v-slot:[slotName]> 底部自定义插槽 </template>
      <div>默认插槽</div>
    </test1>
  </div>
</template>
<script>
import test1 from "./components/test1";
export default {
  components: { test1 },
  name: "Login",
  data() {
    return {
      slotName: "footer",
    };
  },

  methods: {},
};
</script>
<style scoped>
</style>
