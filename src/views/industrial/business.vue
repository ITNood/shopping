<template>
  <div>
    <Header :title="msg" />
    <div class="layout" style="margin-bottom:0">
        <div class="formlist">
            <el-form :model="form" label-width="100px">
                
                <el-form-item prop="number" label="信用代码">
                    <el-input v-model="form.number" placeholder="请输入信用代码"></el-input>
                </el-form-item>
                 <el-form-item prop="type" label="名称">
                    <el-input v-model="form.type" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-form-item prop="username" label="类型">
                    <el-input v-model="form.usernmae" placeholder="请输入类型"></el-input>
                </el-form-item>
                 <el-form-item prop="address" label="住所">
                    <el-input v-model="form.address" placeholder="请输入住所"></el-input>
                </el-form-item>
                <el-form-item prop="brand" label="法定代表人">
                    <el-input v-model="form.brand" placeholder="请输入法定代表人"></el-input>
                </el-form-item>
                <el-form-item prop="start" label="送样日期">
                    <el-date-picker type="date" v-model="form.start" placeholder="送样日期"></el-date-picker>
                </el-form-item>
                <el-form-item prop="end" label="检测日期">
                    <el-date-picker type="date" v-model="form.end" placeholder="检测日期"></el-date-picker>
                </el-form-item>
                <el-form-item prop="code" label="经营范围">
                    <el-input v-model="form.code" placeholder="请输入经营范围"></el-input>
                </el-form-item>
            </el-form>
            <div class="uploading">
                <p>上传营业执照（正副本）</p>
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
                    >上传营业执照正本</div>
                </div>
                <div class="load">
                    <input
                    type="file"
                    @change="uploadChange2($event)"
                    >
                    <img
                    :src="img2"
                    v-if="img2"
                    >
                    <div
                    v-else
                    class="card-text"
                    >上传营业执照副本</div>
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
        msg:'营业执照认证',
        form:{
            text:'',
            number:'',
            type:'',
            username:'',
            use:'',
            address:'',
            code:'',
            date:'',
            brand:'',
            tran:'',
            start:'',
            end:'',
            organ:'',
            img:'',
            img2:''
        },
        img:'',
        img2:''
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
    uploadChange2(ev) {
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
          that.img2 = e.target.result;
          that.form.img2=e.target.result
        };
      }
    },
  },
};
</script>

<style scoped>
</style>
