<template>
  <div>
    <Header :title="msg" />
    <div class="layout">

      <div
        class="carList"
        v-for="(val,k) in data"
        :key="k"
      >
        <div class="shoper clear">
          <!--全选-->
          <el-checkbox
            v-model="val.checked"
            @change="_checkAll(val)"
          ></el-checkbox><span>{{val.title}}</span>
          <router-link to="val.url">进店<i class="el-icon-arrow-right"></i></router-link>
        </div>
        <ul class="shopList">
          <li
            v-for="(item,index) in val.goodsList"
            :key="index"
          >
            <el-checkbox
              v-model="item.checked"
              @change="handleCheck(item,index)"
            ></el-checkbox>
            <!--商品图片-->
            <router-link :to="{path:'/details',query:{id:item.id}}">
              <el-image :src="item.img">
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
                <router-link :to="{path:'/details',query:{id:item.id}}">{{item.title}}</router-link>
                <i
                  class="el-icon-delete"
                  @click="dele($event)"
                  :title="item.id"
                ></i>
              </div>
              <!--属性-->
              <div class="quality">
                <span
                  v-for="(quality,index) in item.lists"
                  :key="index"
                >{{quality.name}}:{{quality.nature}}</span>
              </div>
              <!--价格、数量选择-->
              <div class="priceNumber">
                <span>￥{{item.price}}</span>
                <el-input-number
                  v-model="item.num"
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
import Header from "../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "购物车",
      checkedAll: false,
      total: "0.00",
      data: [
        {
          title: "店铺",
          goodsList: [
            {
              num: 1,
              id: 2,
              img: require("../assets/image/shop.jpg"),
              title: "商品名称",
              price: "100.00",
              lists: [
                { name: "颜色", nature: "白色" },
                { name: "规格", nature: "自动" }
              ]
            },
            {
              num: 1,
              id: 2,
              img: require("../assets/image/shop.jpg"),
              title: "商品名称",
              price: "100.00",
              lists: [
                { name: "颜色", nature: "白色" },
                { name: "规格", nature: "自动" }
              ]
            }
          ]
        },

        {
          title: "店铺",
          goodsList: [
            {
              num: 1,
              id: 2,
              img: require("../assets/image/shop.jpg"),
              title: "商品名称",
              price: "100.00",
              lists: [
                { name: "颜色", nature: "白色" },
                { name: "规格", nature: "自动" }
              ]
            },
            {
              num: 1,
              id: 2,
              img: require("../assets/image/shop.jpg"),
              title: "商品名称",
              price: "100.00",
              lists: [
                { name: "颜色", nature: "白色" },
                { name: "规格", nature: "自动" }
              ]
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.data.forEach(item => {
      this.$set(item, "checked", false); //Vue 解决不能检测到对象属性的添加或删除
      // item.checked = false; //如果为真实数据直接设置的对象改变值不会更新视图
      if (item.goodsList) {
        item.goodsList.forEach(citem => {
          this.$set(citem, "checked", false);
          // citem.checked = false;
        });
      }
    });
  },
  updated(){
      let allprice = [] 
      this.data.map(item=>{
        //console.log(item)
        item.goodsList.map(goods=>{
          if(goods.checked==true){
             // console.log(goods.price*goods.num)
              allprice.push(goods.price*goods.num)
          }

         })
      })
      //console.log(allprice)
      if (allprice.length==0){
        this.total = 0
      }
      else{
        this.total= allprice.reduce((a,b)=>{
          return a + b
      })
      }
       
     
  },
  methods: {
    //全选
    checkAll() {
      
      this.data.forEach(item => {
        item.checked = this.checkedAll;
        if (item.goodsList) {
          item.goodsList.forEach(citem => {
            citem.checked = this.checkedAll;
          });
        }
      });
      console.log(this.data)
    },
    //商家全选
    _checkAll(val, k) {
      val.goodsList.forEach(item => {
        item.checked = val.checked;
      });
      if (this.data.every(item => item.checked)) {
        this.checkedAll = true;
      } else {
        this.checkedAll = false;
      }
    },
    //商品选择框
    handleCheck(item, index) {
      var check = []; //保存中间层是否被选中的布尔值
      this.data.forEach((items, index) => {
        if (items.goodsList) {
          var bool = items.goodsList.every(citem => citem.checked);
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
    }
  }
};
</script>

<style scoped>
</style>
