<template>
  <div>
    <Header :title="msg" />
    <div class="layout">
      <div class="formlist">
        <el-form
          :model="form"
          label-width="50px"
        >
          <el-form-item
            label="姓名"
            prop="username"
          >
            <el-input
              placeholder="请输入姓名"
              v-model="form.username"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="校名"
            prop="school"
          >
            <el-input
              placeholder="请输入学校名称"
              v-model="form.school"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="专业"
            prop="type"
          >
            <el-input
              placeholder="请输入专业名称"
              v-model="form.type"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="uploading">
          <p>毕业证原件</p>
          <div class="load">
            <input
              type="file"
              @change="uploadChange($event)"
            >
            <img
              :src="img"
              v-if="img"
            >
            <div
              v-else
              class="card-text"
            >上传毕业证书</div>
          </div>
        </div>
        <el-button class="submit" style="margin-top:30px;">提交认证</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "毕业证书",
      form: {
        username: "",
        school: "",
        type: "",
        img: ""
      },
      //img:require('../../assets/image/banner.jpg')
      img: ""
    };
  },
  methods: {
    uploadChange(ev) {
    //     console.log(111)
    //   console.log(ev.target.files);
      var file = ev.target.files[0];
      let that = this;
      if (window.FileReader) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        //监听文件读取结束后事件
        reader.onloadend = function(e) {
          // 图片base64
          that.img = e.target.result;
          that.form.img=e.target.result
        };
      }
    }
  }
};
</script>

<style scoped>
</style>
