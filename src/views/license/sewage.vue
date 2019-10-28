<template>
  <div>
    <Header :title="msg" />
    <div class="layout" style="margin-bottom:0">
        <div class="formlist">
            <el-form :model="form" label-width="100px">
                <el-form-item prop="number" label="证书编号">
                    <el-input v-model="form.number" placeholder="请输入证书编号"></el-input>
                </el-form-item>
                <el-form-item prop="brand" label="单位名称">
                    <el-input v-model="form.brand" placeholder="请输入单位名称"></el-input>
                </el-form-item>
                <el-form-item prop="address" label="单位地址">
                    <el-input v-model="form.address" placeholder="请输入单位地址"></el-input>
                </el-form-item>
                <el-form-item prop="code" label="法定代表人">
                    <el-input v-model="form.code" placeholder="请输入法定代表人"></el-input>
                </el-form-item>
                <el-form-item prop="username" label="营业执照号">
                    <el-input v-model="form.usernmae" placeholder="请输入营业执照号"></el-input>
                </el-form-item>
                <el-form-item prop="type" label="组织机构代码">
                    <el-input v-model="form.type" placeholder="请输入组织机构代码"></el-input>
                </el-form-item>
                <el-form-item prop="use" label="排污种类">
                    <el-input v-model="form.use" placeholder="请输入排污种类"></el-input>
                </el-form-item>
                <el-form-item prop="amount" label="总量控制指标">
                    <el-input v-model="form.amount" placeholder="请输入总量控制指标"></el-input>
                </el-form-item>
                <el-form-item prop="start" label="有效起始日期">
                    <el-date-picker type="date" v-model="form.start" placeholder="有效起始日期"></el-date-picker>
                </el-form-item>
                <el-form-item prop="end" label="有效结束日期">
                    <el-date-picker type="date" v-model="form.end" placeholder="有效结束日期"></el-date-picker>
                </el-form-item>
            </el-form>
            <div class="uploading">
                <p>上传排污许可证</p>
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
                    >上传排污许可证</div>
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
        msg:'排污许可证认证',
        form:{
            number:'',
            type:'',
            username:'',
            use:'',
            address:'',
            code:'',
            brand:'',
            tran:'',
            amount:'',
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
