<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          :model="businessForm"
          ref="businessForm"
          class="phoneForm"
        >
          <el-form-item
            prop="name"
            label="企业名称"
          >
            <el-input
              v-model="businessForm.name"
              placeholder="请输入企业名称"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="number"
            label="企业注册号"
          >
            <el-input
              v-model="businessForm.number"
              placeholder="请输入企业注册号"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="username"
            label="法人名称"
          >
            <el-input
              v-model="businessForm.username"
              placeholder="请输入法人名称"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="usernameId"
            label="法人身认证"
          >
            <el-input
              v-model="businessForm.usernameId"
              placeholder="请输入法人身认证"
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
              上传工商营业执照照片
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-button class="fixedsubmit">提交认证</el-button>
  </div>
</template>

<script>
import Header from "../../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "企业工商执照认证",
      icon: "el-icon-arrow-left",
      businessForm:{},
      img:''
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
    }
  }
};
</script>

<style scoped>
</style>
