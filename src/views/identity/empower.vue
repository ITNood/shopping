<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          :model="empowerForm"
          ref="empowerForm"
          class="phoneForm"
        >
          <el-form-item
            prop="name"
            label="企业名称"
          >
            <el-input
              v-model="empowerForm.name"
              placeholder="请输入企业名称"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="number"
            label="授权经营合同号"
          >
            <el-input
              v-model="empowerForm.number"
              placeholder="请输入授权经营合同号"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="unit"
            label="授权单位"
          >
            <el-input
              v-model="empowerForm.unit"
              placeholder="请输入授权单位"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="username"
            label="法定代表人"
          >
            <el-input
              v-model="empowerForm.username"
              placeholder="请输入法定代表人"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="area"
            label="授权区域"
          >
            <el-input
              v-model="empowerForm.area"
              placeholder="请输入授权区域"
            ></el-input>
          </el-form-item>
          <el-form-item label="授权期限">
            <el-date-picker
              v-model="empowerForm.start"
              placeholder="请选择"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="至">
            <el-date-picker
              v-model="empowerForm.end"
              placeholder="请选择"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="授权时间">
            <el-date-picker
              v-model="empowerForm.date"
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
      msg: "授权证书认证",
      icon: "el-icon-arrow-left",
      empowerForm: {},
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
