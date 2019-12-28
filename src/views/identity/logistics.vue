<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          :model="logisticsForm"
          ref="logisticsForm"
          class="phoneForm"
        >
          <el-form-item
            prop="number"
            label="注册号"
          >
            <el-input
              v-model="logisticsForm.number"
              placeholder="请输入注册号"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="name"
            label="公司名称"
          >
            <el-input
              v-model="logisticsForm.name"
              placeholder="请输入公司名称"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="address"
            label="地址"
          >
            <el-input
              v-model="logisticsForm.address"
              placeholder="请输入地址"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="type"
            label="公司类型"
          >
            <el-input
              v-model="logisticsForm.type"
              placeholder="请输入公司类型"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="breed"
            label="经营范围"
          >
            <el-input
              v-model="logisticsForm.breed"
              placeholder="请输入经营范围"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="amount"
            label="注册资金"
          >
            <el-input
              v-model="logisticsForm.amount"
              placeholder="请输入注册资金"
            ></el-input>
          </el-form-item>
          <el-form-item label="成立日期">
            <el-date-picker
              v-model="logisticsForm.date"
              placeholder="请选择"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="营业期限">
            <el-date-picker
              v-model="logisticsForm.start"
              placeholder="请选择"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="至">
            <el-date-picker
              v-model="logisticsForm.end"
              placeholder="请选择"
            ></el-date-picker>
          </el-form-item>
          <el-form-item
            prop="username"
            label="法定代表人"
          >
            <el-input
              v-model="logisticsForm.username"
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
      msg: "物流公司认证",
      icon: "el-icon-arrow-left",
      logisticsForm: {},
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
