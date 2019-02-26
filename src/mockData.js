// 引入mockjs
// import Mock from 'mockjs'

// 2. 使用Mock.mock 来拦截请求

/**
 * 第一个参数是，url(要么写全部地址，要么写正则匹配)/banner\/search/
 * 第二个参数是字符串模板,是最终返回给前端的内容
 *
 */
// Mock.mock(/banner\/search/, {
//   'code|1': [0, 1],
//   'msg|1': ['ok', '网络异常请稍后重试'],
//   'data|6-13': [
//     {
//       '_id|1-100': 100,
//       imgUrl: Mock.Random.image('750x420')
//     }
//   ]
// })
