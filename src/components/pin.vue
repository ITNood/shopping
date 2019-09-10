<template>
  <div>
    <el-drawer
      :visible.sync="hide"
      direction="btt"
      size="80%"
      id="pin"
    >

      <div class="pay-tool">
        <div class="pay-tool-title border-bottom">
          <span
            class="icon1 icon-back"
          ></span>
        </div>
        <!--密码输入框-->
        <div class="pay-tool-content">
          <div class="pay-tool-inputs">
            <div
              class="item"
              v-for="i in items"
              :key="i"
            ><span
                class="icon_dot"
                v-if="password[i]"
              ></span></div>
          </div>
        </div>
        <!--键盘-->
        <div class="pay-tool-keyboard">
          <ul>
            <li
              @click="keyUpHandle($event)"
              v-for="val in keys"
              :key="val"
            >
              {{ val }}
            </li>
            <li
              class="del"
              @click="delHandle"
            >
              <span class="icon-del el-icon-back"></span>
            </li>
          </ul>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
const keys = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0];
export default {
  name: "Pin",
  //props:["amnout"],
  data() {
    return {
      hide: false,
      items: [0, 1, 2, 3, 4, 5],
      keys: keys(),
      password: []
    };
  },
  methods: {
    open(flag){
        this.hide=!this.hide
        this.clearPasswordHandle()
    },
    keyUpHandle(e) {
      let text = e.currentTarget.innerText;
      let len = this.password.length;
      if (!text || len >= 6) return;
      this.password.push(text);
      this.ajaxData();
    },
    //删除密码
    delHandle() {
      if (this.password.length <= 0) return false;
      this.password.shift();
    },
    ajaxData() {
      if (this.password.length >= 6) {
        let that = that;
        //输完密码后执行操作
        //输完密码之后，这里函数里提交
        
       let password=this.password.join("")
    // console.log(this.amnout)
        this.$emit('submit',password)

       this.hide=!this.hide
       this.clearPasswordHandle()
       //这里是
      }
      return false;
    },
    //清空密码
    clearPasswordHandle() {
      this.password = [];
    }
  }
};
</script>

<style scoped>
.pay-tool {
    overflow: hidden;
    display: block;
    display: fixed;
    bottom: 0;
    left:0;
    width: 100%;
    margin-top: 30px;
}

.pay-tool-title {
    width: 100%;
    height: 2.08888888rem;
    line-height: 2.08888888rem;
    text-align: center;
    overflow: hidden;
}

.icon1 {
    float: left;
    margin-top: 0.72222222rem;
}

strong {
    font-size: 16px;
}

.pay-tool-inputs {
    width: 312px;
    height: 32px;
    margin: 1.28888888rem auto 0;
    border-radius: 0.26666666rem;
    text-align: center;
}

.item {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #f8f1de;
    margin: 5px;
    float: left;
    overflow: hidden;
}

.icon_dot {
    display: block;
    width: 40px;
    height: 40px;
    background: url('../assets/image/round.png') no-repeat center;
    background-size: cover;
}

.pay-tool-keyboard {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: block;
}

.pay-tool-keyboard ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.pay-tool-keyboard li {
    width: 33.1333%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 22px;
    color: #000;
}
</style>
