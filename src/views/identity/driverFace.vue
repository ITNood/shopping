<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          :model="faceForm"
          ref="faceForm"
          class="phoneForm"
        >
          <el-form-item
            prop="number"
            label="号牌号码"
          >
            <el-input
              v-model="faceForm.number"
              placeholder="请输入号牌号码"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="type"
            label="车辆类型"
          >
            <el-input
              v-model="faceForm.type"
              placeholder="请输入车辆类型"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="username"
            label="所有人姓名"
          >
            <el-input
              v-model="faceForm.username"
              placeholder="请输入所有人姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="使用性质">
            <el-select
              v-model="faceForm.use"
              placeholder="请选择"
            >
              <el-option
                v-for="item in items"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            prop="address"
            label="住址"
          >
            <el-input
              v-model="faceForm.address"
              placeholder="请输入住址"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="code"
            label="车辆识别代码"
          >
            <el-input
              v-model="faceForm.code"
              placeholder="请输入车辆识别代码"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="brand"
            label="品牌型号"
          >
            <el-input
              v-model="faceForm.brand"
              placeholder="请输入品牌型号"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="motor"
            label="发动机号码"
          >
            <el-input
              v-model="faceForm.motor"
              placeholder="请输入发动机号码"
            ></el-input>
          </el-form-item>
          <el-form-item label="注册日期">
            <el-date-picker
              v-model="faceForm.registry"
              placeholder="请选择注册日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="发证日期">
            <el-date-picker
              v-model="faceForm.get"
              placeholder="请选择发证日期"
            ></el-date-picker>
          </el-form-item>
          <el-form-item
            prop="gear"
            label="发证机关"
          >
            <el-input
              v-model="faceForm.gear"
              placeholder="请输入发证机关"
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
      msg: "国内行驶证正页认证",
      icon: "el-icon-arrow-left",
      faceForm: {},
      items: [],
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
