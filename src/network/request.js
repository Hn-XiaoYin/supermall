import axios from 'axios'

export function request(config, success, failure) {
  // 创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 网络请求
  instance(config)
    .then(res => {
      success(res)
    })
    .catch(err => {
      failure(err)
    })
}

export function requestExt(config) {
  // 创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 网络请求
  instance(config.baseConfig)
    .then(res => {
      config.success(res)
    })
    .catch(err => {
      config.failure(err)
    })
}

export function requestExt1(config) {
  return new Promise((resolve, reject) => {
    // 创建实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
    // 网络请求
    instance(config.baseConfig)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function requestExt2(config) {
  // 创建实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  instance.interceptors.request.use(config =>{
    console.log("请求成功");
    console.log(config);
    return config;
  },err => {
    console.log("请求失败");
    console.log(err);
  });
  // instance.interceptors.response.use(bbb => {
  //   console.log(bbb)
  // });
  // 网络请求
  return instance(config.baseConfig)
}