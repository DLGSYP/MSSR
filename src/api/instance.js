import axios from 'axios'
import qs from 'qs'
import router from '../router'
import config from './config'
const { api_base_url } = config

let instance = axios.create({
    time: 1000 * 60, //如果请求话费了超过 `timeout` 的时间，请求将被中断
    baseURL: api_base_url,
    // headers:{
    //     'Cache-Control' : 'no-cache'
    // }
})

instance.defaults.responseType = 'json'
instance.defaults.withCredentials = true//`withCredentials` 表示跨域请求时是否需要使用凭证
instance.defaults.transformRequest = [
    data => {
        return qs.stringify(data)
    }
]
instance.defaults.validateStatus = function () {
    //`validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
    //如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 
    //否则，promise 将被 rejecte
    return true
}

//请求拦截器(request)
instance.interceptors.request.use(
    // 在发送请求之前做些什么
    config => {
        config.params = {...config.params,timestamp : Date.now()}
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

//异常处理，响应拦截器(response)
instance.interceptors.response.use(response => {
    let data = response.data
    let status = response.status
    console.log(status)//状态码
    if (status === 200) {
        return Promise.resolve(data)
    } else if (status === 301) {
        router.replace({
            path: 'login'
        })
        return
    }
    else {
        return Promise.reject(response)
    }
}, error => {
    console.log(error)
}
)

let ajaxMethod = ['get', 'post']
let api = {}

ajaxMethod.forEach(method => {
    api[method] = function (uri, data, config) {//给api加上get，post两个对象
        return new Promise(function (resolve, reject) {
            instance[method](uri, data, config)
                .then(response => {
                    if (response.code === 200) {
                        resolve(response)
                    }
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
})

export default api
// axios({
//     method:'get',
//     url:'http://bit.ly/2mTM3nY',
//     responseType:'stream'
//   })
//     .then(function(response) {
//     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//   });