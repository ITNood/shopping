<template>
  <div>
    <Header :title="msg" />
    <div class="layout">
      <div
        class="carList"
        v-for="(val,k) in todos"
        :key="k"
      >
        <div class="shoper clear">
          <!--全选-->
          <el-checkbox
            v-model="val.checked"
            @change="_checkAll(val)"
          ></el-checkbox><span>{{val.name}}</span>
          <router-link :to="{path:'/',query:{id:val.id}}">进店<i class="el-icon-arrow-right"></i></router-link>
        </div>
        <ul class="shopList">
          <li
            v-for="(item,index) in val.data"
            :key="index"
          >
            <el-checkbox
              v-model="item.checked"
              @change="handleCheck(item,index)"
            ></el-checkbox>
            <!--商品图片-->
            <router-link :to="{path:'/details',query:{id:item.id}}">
              <el-image :src="item.goodsPic">
                <div
                  slot="error"
                  class="image-slot"
                >
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </router-link>
            <div class="shopRight">
              <!--商品名称-->
              <div class="shopName">
                <router-link :to="{path:'/details',query:{id:item.id}}">{{item.goodsName}}</router-link>
                <i
                  class="el-icon-delete"
                  @click="dele($event)"
                  :title="item.id"
                ></i>
              </div>
              <!--属性-->
              <div class="quality">
                <span
                  v-for="(quality,index) in item.spec"
                  :key="index"
                >{{quality.name}}:{{quality.val}}</span>
              </div>
              <!--价格、数量选择-->
              <div class="priceNumber">
                <span>￥{{item.price}}</span>
                <el-input-number
                  v-model="item.goods_number"
                  :min="1"
                  class="addNumber"
                  size="mini"
                ></el-input-number>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--底部-->
    <div class="carBootom">
      <el-row>
        <el-col
          :span="18"
          class="settlement"
        >
          <el-checkbox
            v-model="checkedAll"
            @change="checkAll"
            label="全选"
          ></el-checkbox>
          <div class="total">合计：<span style="color:#d10216;font-size:15px">￥{{total}}</span></div>
        </el-col>
        <el-col
          :span="6"
          class="payment"
        >去结算>></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import api from '../API/index'
import Header from "../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "购物车",
      checkedAll: false,
      total: 0,
      todos: []
    };
  },
  mounted() {
    this.getdata();
    this.todos.forEach(item => {
      this.$set(item, "checked", false);
      if (item.goodsList) {
        item.goodsList.forEach(citem => {
          this.$set(citem, "checked", false);
        });
      }
    });
  },
  updated() {
    //价格计算
    let allprice = [];
    this.todos.map(item => {
      item.data.map(goods => {
        if (goods.checked == true) {
          allprice.push(goods.price * goods.goods_number);
        }
      });
    });
    //console.log(allprice)
    if (allprice.length == 0) {
      this.total = 0;
    } else {
      this.total= allprice.reduce((a, b) => {
        return a + b;
      });
    }
  },
  methods: {
    getdata(){
      api.minicart.template.choices('shop/shopCar/select').then(succ=>{
        if(succ.status==200){
          if(succ.res.data.length>0){
            this.todos=this.todos.concat(succ.res.data)
          }
        }
      }).catch(err=>{
        
      })
    },
    //全选
    checkAll() {
      this.todos.forEach(item => {
        item.checked = this.checkedAll;
        if (item.data) {
          item.data.forEach(citem => {
            citem.checked = this.checkedAll;
          });
        }
      });
    },
    //商家全选
    _checkAll(val, k) {
      val.data.forEach(item => {
        item.checked = val.checked;
      });
      if (this.todos.every(item => item.checked)) {
        this.checkedAll = true;
      } else {
        this.checkedAll = false;
      }
    },
    //商品选择框
    handleCheck(item, index) {
      var check = []; //保存中间层是否被选中的布尔值
      this.data.forEach((items, index) => {
        if (items.data) {
          var bool = items.data.every(citem => citem.checked);
          if (bool) {
            items.checked = true;
          } else {
            items.checked = false;
          }
          check.push(bool);
        }
      });
      if (check.indexOf(false) == -1) {
        this.checkedAll = true;
      } else {
        this.checkedAll = false;
      }
    },

    //删除
    dele(ev) {
      console.log(ev);
      let id=ev.target.title
      api.minicart.template.choices('shop/shopCar/delete',{id:id}).then(succ=>{
        if(succ.status==200){
          alert(succ.msg)
          window.location.reload()
        }else if(succ.status==400){
          alert(succ.msg)
        }
      }).catch(err=>{})
    }
  }
};
</script>

<style scoped>
</style>
