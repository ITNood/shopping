<template>
  <div>
    <Header :title="msg" />
    <div class="layout" style="margin-bottom:0">
        <div class="formlist">
            <el-form :model="form" label-width="100px">
               
                <el-form-item prop="number" label="报告编号">
                    <el-input v-model="form.number" placeholder="请输入报告编号"></el-input>
                </el-form-item>
                 <el-form-item prop="type" label="检测单位">
                    <el-input v-model="form.type" placeholder="请输入检测单位"></el-input>
                </el-form-item>
                <el-form-item prop="username" label="委托单位">
                    <el-input v-model="form.usernmae" placeholder="请输入委托单位"></el-input>
                </el-form-item>
                <el-form-item prop="use" label="样品名称">
                    <el-input v-model="form.use" placeholder="请输入样品名称"></el-input>
                </el-form-item>
                <el-form-item prop="brand" label="样品编号">
                    <el-input v-model="form.brand" placeholder="请输入样品编号"></el-input>
                </el-form-item>
                <el-form-item prop="address" label="生产单位">
                    <el-input v-model="form.address" placeholder="请输入生产单位"></el-input>
                </el-form-item>
                <el-form-item prop="size" label="型号/规格">
                    <el-input v-model="form.size" placeholder="请输入型号/规格"></el-input>
                </el-form-item>
                <el-form-item prop="organ" label="检测依据">
                    <el-input v-model="form.organ" placeholder="请输入检测依据"></el-input>
                </el-form-item>
                <el-form-item prop="text" label="检查结论">
                    <el-input type="textarea" v-model="form.text" placeholder="请输入检查结论"></el-input>
                </el-form-item>
            </el-form>
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
};
</script>

<style scoped>
</style>
