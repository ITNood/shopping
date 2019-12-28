<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          :model="zoonForm"
          ref="zoonForm"
          class="phoneForm"
        >
          <el-form-item
            prop="name"
            label="企业名称"
          >
            <el-input
              v-model="zoonForm.name"
              placeholder="请输入企业名称"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="username"
            label="法定代表人"
          >
            <el-input
              v-model="zoonForm.username"
              placeholder="请输入法定代表人"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="address"
            label="单位地址"
          >
            <el-input
              v-model="zoonForm.address"
              placeholder="请输入单位地址"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="type"
            label="经营范围"
          >
            <el-input
              v-model="zoonForm.type"
              placeholder="请输入经营范围"
            ></el-input>
          </el-form-item>
          <el-form-item label="有效期">
            <el-date-picker
              v-model="zoonForm.start"
              placeholder="请选择"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="至">
            <el-date-picker
              v-model="zoonForm.end"
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
      msg: "动物免疫合格证认证",
      icon: "el-icon-arrow-left",
      zoonForm: {},
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
