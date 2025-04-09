// 导入 axios 库
import axios from 'axios'

// 创建 axios 实例
const service = axios.create({
  baseURL: "https://mock.presstime.cn/mock/67f33492aa477834147779e7/WYW", // api 的 base_url
  timeout: 5000 // 请求超时时间
})

export default service