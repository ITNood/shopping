<template>
  <div>
    <Header :title="msg" />
    <div class="layout" style="margin-bottom:0">
        <div class="formlist">
            <el-form :model="form" label-width="100px">
                <el-form-item prop="number" label="银行户名">
                    <el-input v-model="form.number" placeholder="请输入银行户名"></el-input>
                </el-form-item>
                 <el-form-item prop="type" label="企业注册账号">
                    <el-input v-model="form.type" placeholder="请输入企业注册账号"></el-input>
                </el-form-item>
                <el-form-item prop="username" label="对工账户">
                    <el-input v-model="form.usernmae" placeholder="请输入对工账户"></el-input>
                </el-form-item>
                <el-form-item prop="use" label="开户行">
                    <el-input v-model="form.use" placeholder="请输入开户行"></el-input>
                </el-form-item>
                <el-form-item prop="brand" label="开户行所在地">
                    <el-input v-model="form.brand" placeholder="请输入开户行所在地"></el-input>
                </el-form-item>
                <el-form-item prop="address" label="开户行名称">
                    <el-input v-model="form.address" placeholder="请输入开户行名称"></el-input>
                </el-form-item>
            </el-form>
            <div class="uploading">
                <p>质量检测报告</p>
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
                    >上传质量检测报告</div>
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
        msg:'质量检测报告认证',
        form:{
            size:'',
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
