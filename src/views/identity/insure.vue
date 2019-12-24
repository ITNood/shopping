<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          class="phoneForm"
          :model="insureForm"
          ref="insureForm"
        >
          <el-form-item
            prop="carnumber"
            label="保险车牌号"
          >
            <el-input
              v-model="insureForm.carnumber"
              placeholder="请输入保险车牌号"
            />
          </el-form-item>
          <el-form-item
            prop="driver"
            label="行驶证所有人"
          >
            <el-input
              v-model="insureForm.driver"
              placeholder="请输入行驶证所有人姓名"
            />
          </el-form-item>
          <el-form-item
            prop="driverNumber"
            label="行驶证号"
          >
            <el-input
              v-model="insureForm.driverNumber"
              placeholder="请输入行驶证号"
            />
          </el-form-item>
          <el-form-item label="保险到期日">
            <el-date-picker
              v-model="insureForm.date"
              class="datePicker"
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
              上传第三方保险金照片
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
      msg: "第三方保险认证",
      icon: "el-icon-arrow-left",
      insureForm: {},
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
  },
};
</script>

<style scoped>
</style>
