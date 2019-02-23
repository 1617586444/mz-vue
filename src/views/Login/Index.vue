<template>
  <div>
    <!-- <input type="text" placeholder="请输入用户名" v-model="username">
    <input type="text" placeholder="请输入密码" v-model="password"><br>
    <button @click="handleLogin">登录</button>-->
    <!--主体内容区-->
    <div class="login">
      <img src="@/assets/images/ico_04.jpg">
    </div>
    <div class="form">
      <p class="txt-line">
        <input type="text" v-model="username" placeholder="密码" id="input_txt">
      </p>
      <p class="txt-line">
        <input type="password"  v-model="password" placeholder="密码" id="input_pwd">
      </p>
      <input type="submit" value="登录" id="sub" @click="handleLogin">
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    /*
      登录
    */
    handleLogin () {
      axios
        .post('http://localhost:3000/users/login', {
          userName: this.username,
          password: this.password
        })
        .then(res => {
          var data = res.data;
          if (data.code === 0) {
            // 成功
            sessionStorage.setItem('nickname', data.data.nickName);
            // 跳转页面
            // this.$router.push('/card')
            // 跳转到用户想去的页面
            this.$router.replace({
              path: this.$route.query.redirect || '/center'
            });
          } else {
            alert(data.msg);
          }
        });
    }
  }
};
</script>

<style lang="less">
.login {
  height: 180px;
  text-align: center;
  line-height: 250px;
  img {
    width: 60px;
    height: 60px;
  }
}
#input_txt,
#input_pwd {
  border: 0;
  width: 325px;
}
.txt-line {
  border-bottom: 1px solid #ededed;
}
#input_txt {
  width: 325px;
}
.form {
  height: 224px;
  padding: 0 24px;
  .txt-line input {
    height: 55px;
    font-size: 15px;
  }
}
#yzm {
  background: #fff;
  border: 0;
  color: #bdc0c5;
}
input {
  outline: none;
}
input::-webkit-input-placeholder {
  color: #bdc0c5;
}
#sub {
  width: 325px;
  height: 44px;
  background: #ff5f16;
  color: #ff8f5c;
  border: 0;
  border-radius: 10px;
  font-size:15px;
  margin-top: 50px;
}
</style>
