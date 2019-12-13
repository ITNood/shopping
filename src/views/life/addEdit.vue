<template>
  <div>
    <Header :title="msg" />
    <div class="layout">
      <el-form
        :model="form"
        ref="form"
        :rules="rule"
        class="addressForm"
      >
        <el-form-item
          label="收货人："
          prop="call"
        >
          <el-input
            v-model="form.call"
            placeholder="请输入收货人姓名"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="联系电话："
          prop="mobile"
        >
          <el-input
            v-model="form.mobile"
            placeholder="请输入联系电话"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="所在地区："
          prop="value"
        >
          <el-cascader
            size="mini"
            :props="{ value: 'id'}"
            :options="options"
            @change="handleChange"
            v-model="value"
          ></el-cascader>
        </el-form-item>

        <el-form-item
          label="详细地址："
          prop="address"
        >
          <el-input
            v-model="form.address"
            type="textarea"
            placeholder="请输入详细地址"
          ></el-input>
        </el-form-item>

        <!-- <el-form-item
          label="邮政编码："
          prop="postCode"
        >
          <el-input
            v-model="form.postCode"
            placeholder="请输入邮政编码"
          ></el-input>
        </el-form-item> -->
        <el-button
          class="submit"
          v-if="show"
          @click="submit()"
        >确认</el-button>
        <el-button
          class="submit"
          v-else
          @click="submit1()"
        >确认</el-button>
      </el-form>

    </div>
  </div>
</template>

<script>
import api from "../../API/index";
import Header from "../../components/header";
export default {
  components: { Header },
  data() {
    return {
      value: [],
      msg: "地址管理",
      options: [],
      show: true,
      form: {
        call: "",
        mobile: "",
        region: Array,
        address: "",
        id: ""
      },
      rule: {
        call: [
          { required: true, message: "请输入收货人姓名", trigger: "blur" }
        ],
        mobile: [
          { required: true, message: "请输入联系电话", trigger: "blur" }
        ],
        //region: [{ required: true, message: "请输入省市区", trigger: "blur" }],
        address: [
          { required: true, message: "请输入详细地址", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    this.getaddress();
    this.getEdit();
    let id = this.$route.query.id;
    if (id) {
      this.show = false;
    } else {
      this.show = true;
    }
  },
  methods: {
    //省市区
    getaddress() {
      api.minicart.template
        .choices("shop/userAddress/getRegion")
        .then(succ => {
          if (succ.status == 200) {
            this.options = this.options.concat(succ.res.data);
          }
        })
        .catch({});
    },
    //编辑
    getEdit() {
      let id = this.$route.query.id;
      api.minicart.template
        .choices("shop/userAddress/get", { id: id })
        .then(succ => {
          if (succ.status == 200) {
            this.form.call = succ.res.call;
            this.form.mobile = succ.res.mobile;
            this.value = succ.res.select;
            this.form.address = succ.res.address;
          }
        })
        .catch(err => {});
    },
    handleChange(value) {
      // console.log(value);
      this.form.region = value;
      console.log(this.form.region);
    },
    //添加地址
    submit() {
      let data = this.form;
      api.minicart.template
        .choices("shop/userAddress/insert", data)
        .then(succ => {
          if (succ.status == 200) {
            alert(succ.msg);
            // this.$router.push('/my')
            // window.location.reload()
          } else if (succ.status == 400) {
            alert(succ.msg);
          }
        })
        .catch(err => {});
    },
    //编辑地址
    submit1() {
      let id = this.$route.query.id;
      this.form.id = id;
      let data = this.form;
      api.minicart.template
        .choices("shop/userAddress/update", data)
        .then(succ => {
          if (succ.status == 200) {
            alert(succ.msg);
            this.$router.go(-1);
          } else if (succ.status == 400) {
            alert(succ.msg);
          }
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
</style>
