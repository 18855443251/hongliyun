 <template>
  <div>
    <div class="contain">
      <!-- 左侧列表饼状图 -->
      <div class="list-box">
        <!-- 添加资产 -->
        <form class="my-form">
          <input
            v-model.trim="name"
            type="text"
            class="form-control"
            placeholder="消费名称"
          />
          <input
            v-model.number="price"
            type="text"
            class="form-control"
            placeholder="消费价格"
          />
          <button @click="add" type="button" class="btn btn-primary">
            添加账单
          </button>
        </form>

        <table class="table table-hover">
          <thead>
            <tr>
              <th>编号</th>
              <th>消费名称</th>
              <th>消费价格</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in list" :key="item.id">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td :class="{ red: item.price > 500 }">
                {{ item.price.toFixed(2) }}
              </td>
              <td><a @click="del(item.id)" href="javascript:;">删除</a></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4">消费总计： {{ totalPrice.toFixed(2) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- 右侧图表 -->
      <div class="echarts-box" id="main"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      list: [],
      name: "",
      price: "",
    };
  },
  computed: {
    totalPrice() {
      return this.list.reduce((sum, item) => sum + item.price, 0);
    },
  },
  created() {
    this.getList();
  },
  mounted() {
    this.myChart = echarts.init(document.querySelector("#main"));
    this.myChart.setOption({
      // 大标题
      title: {
        text: "消费账单列表",
        left: "center",
      },
      // 提示框
      tooltip: {
        trigger: "item",
      },
      // 图例
      legend: {
        orient: "vertical",
        left: "left",
      },
      // 数据项
      series: [
        {
          name: "消费账单",
          type: "pie",
          radius: "50%", // 半径
          data: [
            // { value: 1048, name: '球鞋' },
            // { value: 735, name: '防晒霜' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    });
  },

  methods: {
    getList() {
      this.list = [
        { price: 1048, name: "球鞋" },
        { price: 735, name: "防晒霜" },
      ];

      // 更新图表
      this.myChart.setOption({
        // 数据项
        series: [
          {
            // data: [
            //   { value: 1048, name: '球鞋' },
            //   { value: 735, name: '防晒霜' }
            // ]
            data: this.list.map((item) => ({
              value: item.price,
              name: item.name,
            })),
          },
        ],
      });
    },
    async add() {
      if (!this.name) {
        alert("请输入消费名称");
        return;
      }
      if (typeof this.price !== "number") {
        alert("请输入正确的消费价格");
        return;
      }

      // 发送添加请求
      const res = await axios.post(
        "https://applet-base-api-t.itheima.net/bill",
        {
          creator: "小黑",
          name: this.name,
          price: this.price,
        }
      );
      // 重新渲染一次
      this.getList();

      this.name = "";
      this.price = "";
    },
    async del(id) {
      // 根据 id 发送删除请求
      const res = await axios.delete(
        `https://applet-base-api-t.itheima.net/bill/${id}`
      );
      // 重新渲染
      this.getList();
    },
  },
};
</script>

<style scoped>
.red {
  color: red !important;
}
.search {
  width: 300px;
  margin: 20px 0;
}
.my-form {
  display: flex;
  margin: 20px 0;
}
.my-form input {
  flex: 1;
  margin-right: 20px;
}
.table > :not(:first-child) {
  border-top: none;
}
.contain {
  display: flex;
  padding: 10px;
}
.list-box {
  flex: 1;
  padding: 0 30px;
}
.list-box a {
  text-decoration: none;
}
.echarts-box {
  width: 600px;
  height: 400px;
  padding: 30px;
  margin: 0 auto;
  border: 1px solid #ccc;
}
tfoot {
  font-weight: bold;
}
@media screen and (max-width: 1000px) {
  .contain {
    flex-wrap: wrap;
  }
  .list-box {
    width: 100%;
  }
  .echarts-box {
    margin-top: 30px;
  }
}
</style>