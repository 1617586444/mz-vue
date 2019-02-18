
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
