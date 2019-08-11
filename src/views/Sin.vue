<template>
  <div>

    <!-- 头部 -->
    <div class="login_header">
      <header id="common_hd">
        <div class="box">
          <span v-on:click="back">
            <van-icon name="arrow-left" size="19px" />
          </span>
          手机一键登录
        </div>
      </header>
    </div>

    <!-- 用户登入 -->
    <el-row type="flex" justify="center">
      <el-form ref="loginForm" :model="user" :rules="rules" status-icon label-width="80px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {},
      rules: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        pass: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    }
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (this.user.name === "admin" && this.user.pass === "123") {
            this.$notify({
              type: "success",
              message: "欢迎你," + this.user.name + "!",
              duration: 3000
            });
            this.$router.replace("/");
          } else {
            this.$message({
              type: "error",
              message: "用户名或密码错误",
              showClose: true
            });
          }
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.login_header {
  position: relative;
  width: 100%;
  height: 52px;
  line-height: 38px;
  text-align: center;
  padding: 7px 0 0 0;
  background: #fff;
  margin-bottom: 16px;
}
#common_hd {
  height: 44px;
  position: relative;
}
.box {
  font-size: 15px;
  position: relative;
}
.box span {
  position: absolute;
  left: 10px;
  top: 5px;
}
.input_form {
  width: 100%;
  margin: 18px 0 0 0;
  padding: 0 0 22.5px 0;
  background: #fff;
}
.input_form .input_item {
  position: relative;
  width: 100%;
  line-height: 42px;
  padding: 12px 0;
  border-bottom: 1px #e6e6e6 solid;
}
.input_form .input_item img {
  width: 22.5px;
  height: 22.5px;
  margin-left: 10px;
  margin-right: 16px;
  vertical-align: middle;
}
.input_form .input_item input {
  font-size: 13px;
  border: none;
  color: #b3b3b3;
}
.input_form .input_item .get_yzm {
  height: 16.8px;
  line-height: 16.8px;
  position: absolute;
  right: 27px;
  bottom: 22.5px;
  color: #b2b2b2;
  font-size: 13px;
  padding-left: 19px;
  border-left: 1px #b2b2b2 solid;
}
.wap_submit {
  display: block;
  width: 328px;
  height: 45px;
  margin: 22.5px auto 0;
  border-radius: 30px;
  background: #f3210a;
  color: #fff;
  font-size: 15px;
  border: none;
}
</style>
