<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          :model="drugForm"
          ref="drugForm"
          class="phoneForm"
        >
          <el-form-item
            prop="number"
            label="证书编号"
          >
            <el-input
              v-model="drugForm.number"
              placeholder="请输入证书编号"
            />
          </el-form-item>
          <el-form-item
            prop="name"
            label="企业名称"
          >
            <el-input
              v-model="drugForm.name"
              placeholder="请输入企业名称"
            />
          </el-form-item>
          <el-form-item
            prop="address"
            label="注册地址"
          >
            <el-input
              v-model="drugForm.address"
              placeholder="请输入注册地址"
            />
          </el-form-item>
          <el-form-item
            prop="limits"
            label="验收范围"
          >
            <el-input
              v-model="drugForm.limits"
              placeholder="请输入验收范围"
            />
          </el-form-item>
          <el-form-item label="有效期">
            <el-date-picker
              v-model="drugForm.start"
              placeholder="请选择"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="至">
            <el-date-picker
              v-model="drugForm.end"
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
      msg: "兽药GMP证书认证",
      icon: "el-icon-arrow-left",
      drugForm: {},
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

