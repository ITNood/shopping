<template>
  <div>
    <Header :title="msg" />
    <div class="layout">
      <div class="choose">
        <div class="contact">
          <div class="username">收货人：{{username}}</div>
          <div class="mobile">{{mobile}}</div>
        </div>
        <div class="address"><i class="el-icon-location"></i>{{address}}</div>
        <div class="handle">
          <el-radio
            v-model="selected"
            label="1"
          >默认地址</el-radio>
          <div class="editDel">
            <a
              @click="edit($event)"
              :title="id"
            ><i class="el-icon-edit"></i>编辑</a>
            <a><i
                class="el-icon-delete"
                @click="del($event)"
                :title="id"
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
            <div class="username">收货人：{{username}}</div>
            <div class="mobile">{{mobile}}</div>
          </div>
          <div class="address"><i class="el-icon-location"></i>{{address}}</div>
          <div class="handle">
            <el-radio
              label="(index+1)"
            >设置默认地址</el-radio>
            <div class="editDel">
              <a
                @click="edit($event)"
                :title="id"
              ><i class="el-icon-edit"></i>编辑</a>
              <a><i
                  class="el-icon-delete"
                  @click="del($event)"
                  :title="id"
                ></i>删除</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import Header from "../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "地址管理",
      username: "张三",
      mobile: 13800138000,
      address: "广东省深圳市南山区南山村二十巷8号101",
      selected: "1",
      id: 1,
      items: [
        {
          username: "张三",
          mobile: 13800138000,
          address: "广东省深圳市南山区南山村二十巷8号101",
          id: 1
        },
        {
          username: "张三",
          mobile: 13800138000,
          address: "广东省深圳市南山区南山村二十巷8号101",
          id: 2
        }
      ]
    };
  },
  methods: {
    del(ev) {
      console.log(ev);
    },
    edit(ev) {
      console.log(ev);
    }
  }
};
</script>

<style scoped>
</style>
