<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          :model="driverForm"
          ref="driverForm"
          class="phoneForm"
        >
          <el-form-item
            prop="carnumber"
            label="号牌号码"
          >
            <el-input
              v-model="driverForm.carnumber"
              placeholder="请输入号牌号码"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="number"
            label="档案编号"
          >
            <el-input
              v-model="driverForm.number"
              placeholder="请输入档案编号"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="people"
            label="核定载人数"
          >
            <el-input
              v-model="driverForm.people"
              placeholder="请输入核定载人数"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="weight"
            label="总质量"
          >
            <el-input
              v-model="driverForm.weight"
              placeholder="请输入总质量"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="mass"
            label="整备质量"
          >
            <el-input
              v-model="driverForm.mass"
              placeholder="请输入整备质量"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="size"
            label="外廊尺寸"
          >
            <el-input
              v-model="driverForm.size"
              placeholder="请输入外廊尺寸"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="market"
            label="备注"
          >
            <el-input
              v-model="driverForm.market"
              placeholder="请输入备注"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="histry"
            label="检验记录"
          >
            <el-input
              v-model="driverForm.histry"
              placeholder="请输入检验记录"
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
      msg: "国内行驶证副页认证",
      icon: "el-icon-arrow-left",
      driverForm: {},
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
