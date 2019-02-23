- 动画过渡
- 自定义指令
- v-model 语法糖
- px2rem | hotcss.js
- mockJS (假数据)
- vue-cli 2.x 的使用
- 正向代理
- 百度定位
- axios 封装
- jwt
- mongodb 备份与恢复
- 项目上线

# pxtorem

- 是 postcss 工具的一款插件
1. 安装
  yarn add postcss-pxtorem -D
  npm install postcss-pxtorem -D

2. 找到项目根目录下的 postcss.config.js 文件


``````
 js


 module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {}
  }
}

`````
