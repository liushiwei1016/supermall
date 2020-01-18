import axios from 'axios'

export function $axios(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL : 'http://123.207.32.32:8000/api/hy',
    // baseURL : 'http://106.54.54.237:8000/api/hy',
    timeout: 5000
  });

  // axios 拦截器
  //2.1，设置请求拦截器
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error);
  });

  //2.2，设置响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error);
  })

  //3. 发送真正的请求
  return instance(config)
}
