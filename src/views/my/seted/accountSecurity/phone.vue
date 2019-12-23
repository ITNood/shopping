<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
        <div class="elmail" >
            <el-form :model="phoneForm" ref="phoneForm" class="phoneForm">
                <el-form-item prop="country" label="国家/地区">
                   <el-select v-model="phoneForm.country">
                       <el-option v-for="item in items" :key="item.id" :label="item.name" :value="item.id"></el-option>
                   </el-select>
                </el-form-item>
                
                <el-form-item prop="Phone" label="手机号码">
                    <el-input v-model="phoneForm.Phone" placeholder="请输入手机号码"></el-input>
                </el-form-item>
                <el-form-item prop="phoneCode" label="手机验证码">
                    <el-input v-model="phoneForm.phoneCode" placeholder="请输入手机验证码"></el-input>
                    <el-button class="send">获取验证码</el-button>
                </el-form-item>
            </el-form>
            <el-button class="submit">确认</el-button>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "../../../../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "手机绑定",
      icon: "el-icon-arrow-left",
      items:[
          {id:1,name:'中国'},
          {id:2,name:'美国'}
      ],
      phoneForm:{}
    };
  }
};
</script>

<style scoped>
</style>
