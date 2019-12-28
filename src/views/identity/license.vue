<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          :model="licenseForm"
          ref="licenseForm"
          class="phoneForm"
        >
          <el-form-item
            prop="number"
            label="信用代码"
          >
            <el-input
              v-model="licenseForm.number"
              placeholder="请输入信用代码"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="name"
            label="名称"
          >
            <el-input
              v-model="licenseForm.name"
              placeholder="请输入名称"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="type"
            label="名称"
          >
            <el-input
              v-model="licenseForm.type"
              placeholder="请输入类型"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="address"
            label="住所"
          >
            <el-input
              v-model="licenseForm.address"
              placeholder="请输入住所"
            ></el-input>
          </el-form-item>
          <el-form-item label="有效期">
            <el-date-picker
              v-model="licenseForm.start"
              placeholder="请选择"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="至">
            <el-date-picker
              v-model="licenseForm.end"
              placeholder="请选择"
            ></el-date-picker>
          </el-form-item>
          <el-form-item
            prop="limits"
            label="经营范围"
          >
            <el-input
              v-model="licenseForm.limits"
              placeholder="请输入经营范围"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="username"
            label="法定代表人"
          >
            <el-input
              v-model="licenseForm.username"
              placeholder="请输入法定代表人"
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
              上传营业执照(正本)
            </div>
          </div>
        </div>
        <div
          class="uploadImg"
          style="margin-top:15px"
        >
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
              上传营业执照(副本)
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
      msg: "营业执照认证",
      icon: "el-icon-arrow-left",
      licenseForm: {},
      img: "",
      img1: ""
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
