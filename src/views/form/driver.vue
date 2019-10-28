<template>
  <div>
    <Header :title="msg" />
    <div class="layout" style="margin-bottom:0">
      <div class="formlist">
        <el-form
          :model="form"
          label-width="100px"
        >
          <el-form-item
            prop="number"
            label="驾驶证号"
          >
            <el-input
              v-model="form.number"
              placeholder="请输入驾驶证号码"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="姓名"
            prop="username"
          >
            <el-input
              v-model="form.username"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>

          <el-row class="special">
              <el-col :span="12">
                  <el-form-item prop="sex" label="性别">
                      <el-select v-model="form.sex">
                          <el-option value="男"></el-option>
                          <el-option value="女"></el-option>
                      </el-select>
                  </el-form-item>
              </el-col>
              <el-col :span="12">
                  <el-form-item prop="country" label="国籍">
                      <el-input v-model="form.country" placeholder="如:中国"></el-input>
                  </el-form-item>
              </el-col>
          </el-row>
          <el-form-item prop="birthday" label="出生日期">
              <el-date-picker v-model="form.birthday"  type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item prop="address" label="住址">
              <el-input v-model="form.address" placeholder="请输入住址"></el-input>
          </el-form-item>
          <el-form-item prop="cardDate" label="初次领证日期">
              <el-date-picker v-model="form.cardDate"  type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item prop="type" label="准驾车型">
              <el-input v-model="form.type" placeholder="请输入驾驶车型"></el-input>
          </el-form-item>
          <el-form-item prop="start" label="有效起始日期">
               <el-date-picker type="date" v-model="form.start" placeholder="开始日期"></el-date-picker>
          </el-form-item>
          <el-form-item prop="end" label="结束日期">
               <el-date-picker type="date" v-model="form.end" placeholder="结束日期"></el-date-picker>
          </el-form-item>
          <el-form-item prop="organ" label="发证机关">
               <el-input v-model="form.organ" placeholder="请输入发证机关"></el-input>
          </el-form-item>
        </el-form>
        <div class="uploading">
          <p>上传驾驶证(正副页)原件</p>
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
            >上传驾驶证正页</div>
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
            >上传驾驶证副页</div>
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
      msg: "驾驶证认证",
      form: {
          number:'',
          username:'',
          sex:'男',
          country:'',
          birthday:'',
          cardDate:'',
          type:'',
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
    }
  }
};
</script>

<style scoped>
</style>
