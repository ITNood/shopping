
<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          :model="idcard"
          ref="idcard"
          class="phoneForm"
        >
          <el-form-item
            prop="username"
            label="姓名"
          >
            <el-input
              v-model="idcard.username"
              placeholder="请输入身份证姓名"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="idnumber"
            label="证件号码"
          >
            <el-input
              v-model="idcard.idnumber"
              placeholder="请输入身份证号码"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="idImg">
        <div class="uploadImg">
          <input
            name="img"
            type="file"
            @change="uploadChange($event)"
          />
          <div class="uploadText">
            <img
              :src="img"
              v-if="img"
            >
            <div
              class="idcar-text"
              v-else
            >
              上传身份证(正面)原件
            </div>
          </div>
        </div>

        <!--反面-->
        <div class="uploadImg" style="margin-top:20px">
          <input
            name="img"
            type="file"
            @change="uploadChange1($event)"
          />
          <div class="uploadText">
            <img
              :src="img1"
              v-if="img1"
            >
            <div
              class="idcar-text"
              v-else
            >
              上传行驶证(副页)认证
            </div>
          </div>
        </div>
      </div>
      <el-button class="fixedsubmit">提交认证</el-button>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "个人身份证认证",
      icon: "el-icon-arrow-left",
      idcard: {},
      img: "",
      img1:''
    };
  },
  methods: {
    uploadChange(ev) {
      var file = ev.target.files[0];
      let that = this;
      if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        //监听文件读取结束后事件
        reader.onloadend = function(e) {
          // 图片base64
          that.img = e.target.result;
        };
      }
    },
    uploadChange1(ev) {
      var file = ev.target.files[0];
      let that = this;
      if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        //监听文件读取结束后事件
        reader.onloadend = function(e) {
          // 图片base64
          that.img1 = e.target.result;
        };
      }
    }
  }
};
</script>

<style scoped>
</style>
