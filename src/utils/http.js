// 对 axios 的封装
import axios from 'axios'

const http = axios.create();

// 配置 http 的一些配置选项

http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://129.28.106.127:3000' : 'http://localhost:3001';

// 请求的最大等待时间
http.defaults.timeout = 10000;

// 求情拦截
// http.interceptors.request = () {

// }

// 响应拦截
http.interceptors.response.use((response) => {
  console.log(response);
  // 这里我直接将 response.data 给返回出去了. 然后组件中， 使用 封装好的 http 做请求的话他们的返回结果中，就不需要 在data 了
}, (error) => {
  console.log(error);
})

export default http;
