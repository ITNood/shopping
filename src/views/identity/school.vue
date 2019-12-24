<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          :model="formSchool"
          ref="formSchool"
          class="phoneForm"
        >
          <el-form-item
            prop="username"
            label="姓名"
          >
            <el-input
              v-model="formSchool.username"
              placeholder="请输入姓名"
            />
          </el-form-item>
          <el-form-item
            prop="school"
            label="校名"
          >
            <el-input
              v-model="formSchool.school"
              placeholder="请输入学校名称"
            />
          </el-form-item>
          <el-form-item
            prop="professional"
            label="专业"
          >
            <el-input
              v-model="formSchool.professional"
              placeholder="请输入专业名称"
            />
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
              上传毕业证原件
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
      msg: "普通高等学校毕业证",
      icon: "el-icon-arrow-left",
      formSchool: {},
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
