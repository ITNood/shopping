<template>
  <div>
    <Header :title="msg" />
    <div class="layout">

      <div
        class="carList"
        v-for="(item,index) in items"
        :key="index"
      >
        <div class="shoper clear">
            <!--全选-->
          <el-checkbox
            v-model="checkAll"
            @change="handleCheckAllChange"
          ></el-checkbox><span>{{item.title}}</span>
          <router-link to="item.url">进店<i class="el-icon-arrow-right"></i></router-link>
        </div>
        <ul class="shopList">
          <li
            v-for="(todo,index) in item.todos"
            :key="index"
          >
            <el-checkbox
              v-model="checked"
            ></el-checkbox>
            <!--商品图片-->
            <router-link :to="{path:'/details',query:{id:todo.id}}"><img :src="todo.img"></router-link>
            <div class="shopRight">
                <!--商品名称-->
                <div class="shopName">
                    <router-link :to="{path:'/details',query:{id:todo.id}}">{{todo.title}}</router-link>
                    <i class="el-icon-delete" @click="dele($event)" :title="todo.id"></i>
                </div>
                <!--属性-->
                <div class="quality">
                    <span v-for="(quality,index) in todo.lists" :key="index">{{quality.name}}:{{quality.nature}}</span>
                </div>
                <!--价格、数量选择-->
                <div class="priceNumber">
                    <span>￥{{todo.price}}</span>
                    <el-input-number v-model="num" :min="1" class="addNumber"></el-input-number>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--底部-->
    <div class="carBootom">
        <el-row>
            <el-col :span="18" class="settlement">
                <el-checkbox v-model="allChecked" label="全选"></el-checkbox>
                <div class="total">合计：<span style="color:#d10216;font-size:15px">￥{{total}}</span></div>
            </el-col>
            <el-col :span="6" class="payment">去结算>></el-col>
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
      checkAll: false,
      num:'',
      checked:[],
      allChecked:false,
      total:'0.00',
      items: [
        {
          title: "店铺",
          todos: [
            {
              id: 2,
              img: require("../assets/image/shop.jpg"),
              title:'商品名称',
              price:'100.00',
              lists:[
                  {name:'颜色',nature:'白色'},
                  {name:'规格',nature:'自动'}
              ]
            },
            {
              id: 2,
              img: require("../assets/image/shop.jpg"),
              title:'商品名称',
              price:'100.00',
              lists:[
                  {name:'颜色',nature:'白色'},
                  {name:'规格',nature:'自动'}
              ]
            },
          ]
        },

        {
          title: "店铺",
          todos: [
            {
              id: 2,
              img: require("../assets/image/shop.jpg"),
              title:'商品名称',
              price:'100.00',
              lists:[
                  {name:'颜色',nature:'白色'},
                  {name:'规格',nature:'自动'}
              ]
            },
            {
              id: 2,
              img: require("../assets/image/shop.jpg"),
              title:'商品名称',
              price:'100.00',
              lists:[
                  {name:'颜色',nature:'白色'},
                  {name:'规格',nature:'自动'}
              ]
            },
          ]
        }
      ]
    };
  },
  methods: {
    handleCheckAllChange(val) {
      //全选
    },
    //删除
    dele(ev){
        console.log(ev)
    }
  }
};
</script>

<style scoped>
</style>
