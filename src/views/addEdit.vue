<template>
  <div>
    <Header :title="msg" />
    <div class="layout">
        <el-form :model="form" ref="form" :rules="rule" class="addressForm">
            <el-form-item label="收货人：" prop="username">
                <el-input v-model="form.username" placeholder="请输入收货人姓名"></el-input>
            </el-form-item>

            <el-form-item label="联系电话：" prop="area">
                <el-input v-model="form.area" placeholder="请输入联系电话"></el-input>
            </el-form-item>

            <el-form-item label="所在地区：" prop="area">
                <el-input v-model="form.area" placeholder="请输入请输入省市区"></el-input>
            </el-form-item>

            <el-form-item label="详细地址：" prop="address">
                <el-input v-model="form.address" type="textarea" placeholder="请输入详细地址"></el-input>
            </el-form-item>

            <el-form-item label="邮政编码：" prop="postCode">
                <el-input v-model="form.postCode" placeholder="请输入邮政编码"></el-input>
            </el-form-item>
            <el-button class="submit" @click="submit()">确认</el-button>
        </el-form>
        
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
export default {
  components: { Header },
  data() {
    return {
        msg:'地址管理',
        form:{
            username:'',
            mobile:'',
            area:'',
            address:'',
            postCode:''
        },
        rule:{
            username:[
                {required:true,message:'请输入收货人姓名',trigger:'blur'}
            ],
            mobile:[
                {required:true,message:'请输入联系电话',trigger:'blur'}
            ],
            area:[
                {required:true,message:'请输入省市区',trigger:'blur'}
            ],
            address:[
                {required:true,message:'请输入详细地址',trigger:'blur'}
            ]
        }
    };
  },
  methods: {
      submit(){

      }
  },
};
</script>

<style scoped>
</style>
