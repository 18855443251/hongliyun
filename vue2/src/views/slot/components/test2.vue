
<template>
  <div class="cardBox_view">
    <div v-for="(item,index) in tableList" :key="index">
     <span>{{item.name}}</span>
     <slot :option1="item"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      tableList:[
        {
          name:"张三",
          desc:"好好"
        },
          {
          name:"李四",
          desc:"好快"
        }
      ]
    };
  },

  methods: {},
};
</script>
<style scoped>
</style>
