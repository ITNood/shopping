<template>
  <div>
    <Header :title="msg" />
    <div class="layout">
      <div class="choose">
        <div class="contact">
          <div class="username">收货人：{{lsitaddress.call}}</div>
          <div class="mobile">{{lsitaddress.mobile}}</div>
        </div>
        <div class="address"><i class="el-icon-location"></i>{{lsitaddress.region}}{{lsitaddress.address}}</div>
        <div class="handle">
          <el-radio
            v-model="selected"
            label="1"
          >默认地址</el-radio>
          <div class="editDel">
            <a
              @click="edit($event)"
              :title="lsitaddress.id"
            ><i class="el-icon-edit"></i>编辑</a>
            <a><i
                class="el-icon-delete"
                @click="del($event)"
                :title="lsitaddress.id"
              ></i>删除</a>
          </div>
        </div>
      </div>
      <!--地址列表-->
      <ul class="addressList">
        <li
          v-for="(item,index) in items"
          :key="index"
        >
          <div class="contact">
            <div class="username">收货人：{{item.call}}</div>
            <div class="mobile">{{item.mobile}}</div>
          </div>
          <div class="address"><i class="el-icon-location"></i>{{item.region}}{{item.address}}</div>
          <div class="handle">
            <el-radio label="(index+1)"><span
                @click="address($event)"
                :title="item.id"
              >设置默认地址</span></el-radio>
            <div class="editDel">
              <a
                @click="edit($event)"
                :title="item.id"
              ><i class="el-icon-edit"></i>编辑</a>
              <a><i
                  class="el-icon-delete"
                  @click="del($event)"
                  :title="item.id"
                ></i>删除</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "../API/index";
import Header from "../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "地址管理",
      lsitaddress: {},
      selected: "1",
      items: []
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      let that = this;
      api.minicart.template
        .choices("shop/userAddress/select")
        .then(succ => {
          if (succ.status == 200) {
            this.items = this.items.concat(succ.res);
            this.items.map(list => {
              if (list.default == 1) {
                console.log(111)
                that.lsitaddress = list;
              } else{
                console.log(222)
                //that.lsitaddress = this.items[0];
              }
            });
          }
        })
        .catch(err => {});
    },
    del(ev) {
      console.log(ev);
      let id = ev.target.title;
      api.minicart.template
        .choices("shop/userAddress/delete", { id: id })
        .then(succ => {
          if (succ.status == 200) {
            this.items.map((list, i) => {
              if (list.id == id) {
                console.log(i);
                this.items.splice(i, 1);
              }
            });
            alert(succ.msg);
          } else if (succ.status == 400) {
            alert(succ.msg);
          }
        });
    },
    edit(ev) {
      console.log(ev);
      let id = ev.target.title;
      console.log(id);
      this.$router.push({ path: "/addEdit", query: { id: id } });
    },
    //设置默认地址
    address(ev) {
      console.log(ev);
      let id = ev.target.title;
      console.log(id);
      api.minicart.template
        .choices("shop/userAddress/setDefault", { id: id })
        .then(succ => {
          if (succ.status == 200) {
            // window.location.reload()
            this.items.map((list, i) => {
              if (list.id == id) {
                //console.log(list);
                this.lsitaddress = list;
              }
            });
            alert(succ.msg);
          } else if (succ.status == 400) {
            alert(succ.msg);
          }
        });
    }
  }
};
</script>

<style scoped>
</style>
