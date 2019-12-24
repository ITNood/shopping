<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div
      class="layout"
      style="margin-bottom:0"
    >
      <div style="overflow:hidden"> 
        <div class="detailed">
          <ul
            v-for="(item,index) in items"
            :key="index"
          >
            <p>{{item.year}}</p>
            <li
              v-for="(list,index) in item.lists"
              :key="index"
            >
              <img :src="list.img">
              <p>{{list.name}}</p>
              <p style="color:#999">{{list.date}}</p>
              <span v-if="list.state==0">{{list.amount}}</span>
              <span v-else>-{{list.amount}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../../../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "明细",
      icon: "el-icon-arrow-left",
      items: [
        {
          year: 2019,
          lists: [
            {
              img: require("../../../../assets/image/icon_1.png"),
              name: "xxx店铺",
              date: "12.23  15:24",
              amount: "283.00",
              state: 0
            },
            {
              img: require("../../../../assets/image/icon_1.png"),
              name: "xxx店铺",
              date: "12.23  15:24",
              amount: "283.00",
              state: 1
            }
          ]
        },
        {
          year: 2018,
          lists: [
            {
              img: require("../../../../assets/image/icon_1.png"),
              name: "xxx店铺",
              date: "12.23  15:24",
              amount: "283.00",
              state: 1
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
