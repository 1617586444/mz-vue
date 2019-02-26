module.exports = {
  devServer: {
    /**
     * 字符串模式
     * 开发中所有的请求都会代理到这个地址
     * http://localhost:8000/img->http://m.maizuo.com/img
     * http://localhost:3000/banner/search->http://m.mnaizuo.com/banner/search
     *
     */
    // proxy: 'https://m.maizuo.com'
    /**
     *
     *对象模式
     *只对配置的key开头的请求做代理
      http://localhost:8080/img->不会做代理
      http://localhost:8080/api/img->会做代理
      http://localhost:3000/api/img ->不会做代理
      http://www.baidu.com->不会
      http://localhost:8080/hhh/img 不会
      http://localhost:8080/api/gateway?type=2&cityId=210300&k=3759737->https://m.maizuo.com/api/gateway?type=2&cityId=210300&k=3759737

     */
    proxy: {
      // key: value
      '/api': {
        target: 'https://m.maizuo.com',
        pathRewrite: {
          // 路径重写
          '^/api': ''
        }
      }
    }

  }
}
