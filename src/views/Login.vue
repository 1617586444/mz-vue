<template>
  <div>
    <h1>登录页面</h1>
    <input type="text" placeholder="请输入用户名" v-model="username">
    <input type="text" placeholder="请输入密码" v-model="password"><br>
    <button @click="handleLogin">登录</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    /*
      登录
    */
    handleLogin () {
      axios.post('http://localhost:3000/users/login', {
        userName: this.username,
        password: this.password
      }).then(res => {
        var data = res.data;
        if (data.code === 0) {
          // 成功
          sessionStorage.setItem('nickname', data.data.nickName)
          // 跳转页面
          // this.$router.push('/card')
          // 跳转到用户想去的页面
          this.$router.replace({
            path: this.$route.query.redirect
          })
        } else {
          alert(data.msg)
        }
        console.log(data);
      })
    }
  }
}
</script>
