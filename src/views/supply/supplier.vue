<template>
  <div>
    <Header
      :iconback="icon"
      :title="msg"
    />
    <div class="layout">
      <div class="avatar">
        <div class="avatarSrc">
          <a class="supplier">
            <img :src="img" style="width:50px;margin-right:10px">
            <p>单位名称：{{nickname}}</p>
            <p>官方号：{{ILNumber}}</p>
          </a>
        </div>
        <div class="supplierdetails">企业简介：{{details}}</div>
      </div>
      <div class="detailsList">
          <ul>
              <li >
                  联系电话：{{phone}}<i class="el-icon-arrow-right"></i>
              </li>
              <li >
                  联系地址：{{address}}<i class="el-icon-location" style="color:#ffc105"></i>
              </li>
              <li >
                  企业商铺：{{shoper}}<i class="el-icon-arrow-right"></i>
              </li>
              <li >
                  快捷订单：{{order}}<i class="el-icon-arrow-right"></i>
              </li>
          </ul>
      </div>
    </div>
    <el-button class="fixedsubmit">联系客服</el-button>
  </div>
</template>

<script>
import Header from "../../components/header";
export default {
  components: { Header },
  data() {
    return {
      icon: "el-icon-arrow-left",
      msg: "供应商",
      ILNumber: "",
      img: require("../../assets/image/shop.jpg"),
      nickname: "",
      details:'',
      phone:'10086',
      address:'',
      shoper:'',
      order:''
    };
  }
};
</script>

<style scoped>
</style>
