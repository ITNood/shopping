<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          :model="drugtestForm"
          ref="drugtestForm"
          class="phoneForm"
        >
          <el-form-item
            prop="name"
            label="企业名称"
          >
            <el-input
              v-model="drugtestForm.name"
              placeholder="请输入企业名称"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="username"
            label="法定代表人"
          >
            <el-input
              v-model="drugtestForm.username"
              placeholder="请输入法定代表人"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="address"
            label="注册地址"
          >
            <el-input
              v-model="drugtestForm.address"
              placeholder="请输入注册地址"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="produce"
            label="生产地址"
          >
            <el-input
              v-model="drugtestForm.produce"
              placeholder="请输入生产地址"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="type"
            label="生产类别"
          >
            <el-input
              v-model="drugtestForm.type"
              placeholder="请输入生产类别"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="breed"
            label="产品品种"
          >
            <el-input
              v-model="drugtestForm.breed"
              placeholder="请输入产品品种"
            ></el-input>
          </el-form-item>
          <el-form-item label="有效期">
            <el-date-picker
              v-model="drugtestForm.start"
              placeholder="请选择"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="至">
            <el-date-picker
              v-model="drugtestForm.end"
              placeholder="请选择"
            ></el-date-picker>
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
              上传兽药GMP证书原件
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
      msg: "兽药检测机构许可证认证",
      icon: "el-icon-arrow-left",
      drugtestForm: {},
      img: ""
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
