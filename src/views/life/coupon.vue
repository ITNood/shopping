<template>
  <div>
    <Header :title="msg" />
    <div
      class="layout"
      style="margin-bottom:0"
    >
      <el-tabs
        v-model="activeName"
        id="coupon"
      >
        <!-- 领取优惠券-->
        <el-tab-pane
          label="可领取"
          name="first"
        >
          <div class="couponlist">
            <ul>
              <li
                v-for="(item,index) in items"
                :key="index"
              >
                <div class="couponLeft">
                  <h5>{{item.name}}</h5>
                  <p>￥<span>{{item.amount}}</span>{{item.text}}</p>
                </div>
                <div class="couponRight">
                  <el-button
                    @click="geted($event)"
                    :title="item.id"
                    class="get"
                  >领取</el-button>
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <!-- 我的优惠券-->
        <el-tab-pane
          label="我的优惠券"
          name="second"
        >
          <div class="couponlist">
            <ul>
              <li
                v-for="(item,index) in todos"
                :key="index"
              >
                <div class="couponLeft">
                  <h5>{{item.name}}</h5>
                  <p>￥<span>{{item.amount}}</span>{{item.text}}</p>
                </div>
                <div class="couponRight">
                  <router-link
                    v-if="item.state==1"
                    :to="item.url"
                  >{{item.user}}</router-link>
                  <router-link
                    v-else
                    :to="item.url"
                    class="color"
                  >{{item.user}}</router-link>
                  <p>{{item.date}}到期</p>
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "优惠券",
      activeName: "first",
      items: [
        { name: "天使鹭优惠券", amount: "50", text: "满300减50元", id: 2 },
        { name: "天使鹭优惠券", amount: "50", text: "满300减50元", id: 2 },
        { name: "天使鹭优惠券", amount: "50", text: "满300减50元", id: 2 },
        { name: "天使鹭优惠券", amount: "50", text: "满300减50元", id: 2 }
      ],
      todos: [
        {
          name: "天使鹭优惠券",
          amount: "50",
          text: "满300减50元",
          id: 2,
          date: "2019.12.13 12:00",
          user: "全类品",
          url: "",
          state: 1
        },
        {
          name: "天使鹭优惠券",
          amount: "50",
          text: "满300减50元",
          id: 2,
          date: "2019.12.13 12:00",
          user: "去使用",
          url: "",
          state: 2
        }
      ]
    };
  },
  methods: {
    geted(ev) {
      console.log(ev);
    }
  }
};
</script>

<style scoped>
</style>
