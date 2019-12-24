<template>
  <div>
    <Header
      :title="msg"
      :iconback="iconClass"
    />
    <Bottom />
    <div class="layout">
      <div class="avatar">
        <div class="avatarSrc">
          <router-link to="/my/mynews/mynews">
            <el-avatar
              shape="square"
              :size="50"
              :src="avatar"
            ></el-avatar>
            <p>昵称:{{nickname}}</p>
            <p>IL号：{{ILNumber}}</p>
            <i class="el-icon-arrow-right"></i>
          </router-link>
        </div>
        <div class="inviteCode">
          <router-link to="">
            <span class="icon iconfont icon-ai-code"></span>发送邀请码
            <i class="el-icon-arrow-right"></i>
          </router-link>
        </div>
      </div>
      <!--数据-->
      <ul class="data clear">
        <li>
          <h5>{{concern}}</h5>
          <p>关注店铺</p>
        </li>
        <li>
          <h5>{{collect}}</h5>
          <p>收藏商品</p>
        </li>
        <li>
          <h5>{{histroy}}</h5>
          <p>历史记录</p>
        </li>
      </ul>

      <!--全部订单-->
      <router-link
        to=''
        class="allOrder"
      >
        我的订单<span>全部订单<i class="el-icon-arrow-right"></i></span>
      </router-link>

      <!--商品状态-->
      <div class="shopStatus clear">
        <router-link
          :to="item.url"
          v-for="(item,index) in items"
          :key="index"
        >{{item.text}}</router-link>
      </div>

      <!--list-->
      <ul class="myList">
        <li
          v-for="(list,index) in lists"
          :key="index"
        >
          <router-link :to="list.url">
            <img :src="list.img">
            <p>{{list.text}}</p>
            <i class="el-icon-arrow-right"></i>
          </router-link>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import Header from "../../components/header";
import Bottom from "../../components/bottom";
export default {
  components: { Header, Bottom },
  data() {
    return {
      iconClass: "",
      msg: "我",
      ILNumber: "",
      avatar: require("../../assets/image/shop.jpg"),
      nickname: "",
      concern: 0,
      collect: 0,
      histroy: 0,
      items: [
        { url: "", text: "待付款" },
        { url: "", text: "待发货" },
        { url: "", text: "待收货" },
        { url: "", text: "待评价" },
        { url: "", text: "退款/售后" }
      ],
      lists: [
        {
          url: "",
          img: require("../../assets/image/my_1.png"),
          text: "优惠券"
        },
        { url: "/my/wallet/index", img: require("../../assets/image/my_2.png"), text: "钱包" },
        { url: "", img: require("../../assets/image/my_3.png"), text: "入驻" },
        {
          url: "/my/seted/set",
          img: require("../../assets/image/my_4.png"),
          text: "设置"
        },
        { url: "", img: require("../../assets/image/my_5.png"), text: "分享" }
      ]
    };
  }
};
</script>

<style scoped>
</style>
