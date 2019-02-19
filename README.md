## 路由 **

 vue 有一个官方提供的 路由类库 vue-router


 ## 使用步骤 ****

 1. 安装

 npm install vue-router --save

 yarn add vue-router


 2. 配置 vue-router 配置文件(主要地方)

 3. 在 new vue 的地方，引入配置文件，并设置router的选项

 4. 页面中哪里需要切换，哪里就放置一个坑（router-view）(路由视图)

 5. 需要页面跳转，可以使用 router-link

 ## vue-router 引入之后，全局给我们两个组件

 1.router-link  => a

 2. router-view => div


 -----


 ## 路由的层级

 1. 一级路由  整个页面发生变化

 2. 二级路由  一级路由页面中的某个位置有公用，其余位置有变化

 3. 三级路由




1. 设置 viewport

2. reset.css

 - 模块的方式去加载 - src

 - 老方式 link 引入 - public


 3. vue 使用ajax

  vue-resoure vue 专门来处理ajax请求的

  axios      第三方提供的封装了ajax 请求的一个类库

## axios

  对ajax封装成了 promise

  使用：
  1. script
  2. npm 模块方式

  调用他的api

1. get
  axios.get(url,config)

2. post(url,data,config)

  axios.post()

3. axios({
  methods:'',
  url:''
})

config 配置

1. params 请求参数   url?name=''&age=15

  params:{
    name:'',
    age:15
  }

headers 请求头信息

返回的格式    http://localhost:3000/banner/search
