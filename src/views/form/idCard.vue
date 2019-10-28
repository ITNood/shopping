<template>
  <div>
    <Header :title="msg" />
    <div class="layout" style="margin-bottom:0">
        <div class="formlist">
            <el-form :model="form" label-width="100px">
                
                <el-form-item prop="number" label="姓名">
                    <el-input v-model="form.number" placeholder="请输入姓名"></el-input>
                </el-form-item>
                 <el-form-item prop="type" label="证件号码">
                    <el-input v-model="form.type" placeholder="请输入证件号码"></el-input>
                </el-form-item>
            </el-form>
            <div class="uploading">
                <p>上传身份证（正反面）</p>
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
                    >上传身份证正面</div>
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
                    >上传身份证反面</div>
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
        msg:'身份证认证',
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
