<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          :model="permitForm"
          ref="permit"
          class="phoneForm"
        >
          <el-form-item
            prop="name"
            label="名称"
          >
            <el-input
              v-model="permitForm.name"
              placeholder="请输入名称"
            />
          </el-form-item>
          <el-form-item
            prop="address"
            label="地址"
          >
            <el-input
              v-model="permitForm.address"
              placeholder="请输入地址"
            />
          </el-form-item>
          <el-form-item
            prop="number"
            label="许可证号"
          >
            <el-input
              v-model="permitForm.number"
              placeholder="请输入许可证号"
            />
          </el-form-item>
          <el-form-item
            prop="username"
            label="法定代表人"
          >
            <el-input
              v-model="permitForm.username"
              placeholder="请输入法定代表人"
            />
          </el-form-item>
          <el-form-item
            prop="type"
            label="许可范围"
          >
            <el-input
              v-model="permitForm.type"
              placeholder="请输入许可范围"
            />
          </el-form-item>
          <el-form-item label="起始日期">
            <el-date-picker
              v-model="permitForm.start"
              placeholder="请选择"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="结束日期">
            <el-date-picker
              v-model="permitForm.end"
              placeholder="请选择"
            >
            </el-date-picker>
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
              上传许可证原件
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
      msg: "许可证认证",
      icon: "el-icon-arrow-left",
      permitForm: {},
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
