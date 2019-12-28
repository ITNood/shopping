<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <el-form
          :model="bankForm"
          ref="bankForm"
          class="phoneForm"
        >
          <el-form-item label="银行名称">
            <el-select
              v-model="bankForm.name"
              placeholder="请选择"
            >
              <el-option
                v-for="item in items"
                :key="item.id"
                :value="item.id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            prop="number"
            label="企业注册号"
          >
            <el-input
              v-model="bankForm.number"
              placeholder="请输入企业注册号"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="account"
            label="对工账号"
          >
            <el-input
              v-model="bankForm.account"
              placeholder="请输入对工账号"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="bankname"
            label="开户行"
          >
            <el-input
              v-model="bankForm.bankname"
              placeholder="请输入开户行名称"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="address"
            label="开户行所在地"
          >
            <el-input
              v-model="bankForm.address"
              placeholder="请输入开户行所在地"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="addressName"
            label="开户行支行名称"
          >
            <el-input
              v-model="bankForm.addressName"
              placeholder="请输入开户行支行名称"
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
      msg: "企业对银行账号认证",
      icon: "el-icon-arrow-left",
      bankForm: {},
      items: [
        { name: "中国工商银行", id: 1 },
        { name: "中国建设银行", id: 2 },
        { name: "中国农业银行", id: 3 },
        { name: "交通银行", id: 4 }
      ],
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
