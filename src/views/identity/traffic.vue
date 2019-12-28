<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          :model="trafficForm"
          ref="trafficForm"
          class="phoneForm"
        >
          <el-form-item
            prop="number"
            label="车牌号"
          >
            <el-input
              v-model="trafficForm.number"
              placeholder="请输入车牌号"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="usernane"
            label="行驶证所有人"
          >
            <el-input
              v-model="trafficForm.usernane"
              placeholder="请输入行驶证所有人姓名"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="driverNumber"
            label="行驶证号号"
          >
            <el-input
              v-model="trafficForm.driverNumber"
              placeholder="请输入行驶证号"
            ></el-input>
          </el-form-item>
          <el-form-item label="保险到期日">
            <el-date-picker
              v-model="trafficForm.date"
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
              上传交通强险原件
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
      msg: "交通强险认证",
      icon: "el-icon-arrow-left",
      trafficForm: {},
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
