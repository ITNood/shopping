<template>
  <div>
    <Header :title="msg" />
    <div class="layout" style="margin-bottom:0">
        <div class="formlist">
            <el-form :model="form" label-width="100px">
                <el-form-item prop="number" label="车牌号码">
                    <el-input v-model="form.number" placeholder="请输入车牌号码"></el-input>
                </el-form-item>
                 <el-form-item prop="type" label="车辆类型">
                    <el-input v-model="form.type" placeholder="请输入车辆类型"></el-input>
                </el-form-item>
                <el-form-item prop="username" label="车主姓名">
                    <el-input v-model="form.usernmae" placeholder="请输入车主姓名"></el-input>
                </el-form-item>
                <el-form-item prop="use" label="使用性质">
                    <el-select v-model="form.use" placeholder="请选择">
                        <el-option value="商用"></el-option>
                        <el-option value="民用"></el-option>
                        <el-option value="载客"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="address" label="住址">
                    <el-input v-model="form.address" placeholder="请输入住址"></el-input>
                </el-form-item>
                <el-form-item prop="code" label="车俩识别代码">
                    <el-input v-model="form.code" placeholder="请输入车俩识别代码"></el-input>
                </el-form-item>
                <el-form-item prop="brand" label="品牌型号">
                    <el-input v-model="form.brand" placeholder="请输入品牌型号"></el-input>
                </el-form-item>
                <el-form-item prop="tran" label="发动机号码">
                    <el-input v-model="form.tran" placeholder="请输入发动机号码"></el-input>
                </el-form-item>
                <el-form-item prop="start" label="注册日期">
                    <el-date-picker type="date" v-model="form.start" placeholder="注册日期"></el-date-picker>
                </el-form-item>
                <el-form-item prop="end" label="注册日期">
                    <el-date-picker type="date" v-model="form.end" placeholder="注册日期"></el-date-picker>
                </el-form-item>
                <el-form-item prop="organ" label="发证机关">
                    <el-input v-model="form.organ" placeholder="请输入发证机关"></el-input>
                </el-form-item>
            </el-form>
            <div class="uploading">
                <p>上传行驶证原件</p>
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
                    >上传行驶证</div>
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
        msg:'行驶证认证',
        form:{
            number:'',
            type:'',
            username:'',
            use:'',
            address:'',
            code:'',
            brand:'',
            tran:'',
            start:'',
            end:'',
            organ:'',
            img:''
        },
        img:''
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
    },
  },
};
</script>

<style scoped>
</style>
