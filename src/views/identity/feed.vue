<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          :model="feedForm"
          :ref="feedForm"
          class="phoneForm"
        >
          <el-form-item
            prop="number"
            label="证书编号"
          >
            <el-input
              v-model="feedForm.number"
              placeholder="请输入证书编号"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="name"
            label="单位名称"
          >
            <el-input
              v-model="feedForm.name"
              placeholder="请输入单位名称"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="address"
            label="单位地址"
          >
            <el-input
              v-model="feedForm.address"
              placeholder="请输入单位地址"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop=""
            label="法定代表人"
          >
            <el-input
              v-model="feedForm.username"
              placeholder="请输入法定代表人"
            ></el-input>
          </el-form-item>
          <el-form-item label="有效期">
            <el-date-picker
              v-model="feedForm.start"
              placeholder="请选择"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="至">
            <el-date-picker
              v-model="feedForm.end"
              placeholder="请选择"
            ></el-date-picker>
          </el-form-item>
          <el-form-item
            prop="registry"
            label="营业执照注册号"
          >
            <el-input
              v-model="feedForm.registry"
              placeholder="请输入执照注册号"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="group"
            label="组织机构证书"
          >
            <el-input
              v-model="feedForm.group"
              placeholder="请输入组织机构代码证书"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="type"
            label="排放污染物"
          >
            <el-input
              v-model="feedForm.type"
              placeholder="请输入主要排放污染物"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="weight"
            label="总量控制指标"
          >
            <el-input
              v-model="feedForm.weight"
              placeholder="请输入总量控制指标"
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
              上传饲料生产许可证
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
      msg: "饲料生产许可证认证",
      icon: "el-icon-arrow-left",
      feedForm: {},
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
