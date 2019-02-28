# axios 的二次封装

1. 配合 jwt 使用
2. 区分不同的开发环境，以上的不同的 baseUrl
  开发 http://localhost:8080/
  正式 http://127.28.36.129/


# process.env.NODE_ENV 能让我们区分 开发 or 生产环境

1. src 下新建一个 utils 文件夹
2. utils 新建一个 http.js
3. 在 http.js 中封装 axios 并暴露封装好的 axios出去
4. 在 使用 axios 的地方 ,修改为引入中暴露的东西(http.js)
5. 在 main.js 中 将http.js 暴露出来的东西给定义到vue 的原型上面，之后组件就可以使用 this.xxx 拿到定义在vue原型上 xx
