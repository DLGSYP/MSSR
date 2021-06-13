import api from './instance'
// api[method] = function (uri, data, config) {//给api加上get，post两个对象
//     return new Promise(function (resolve, reject) {
//         instance[method](uri, data, config)
//             .then(response => {
//                 if (response.code === 200) {
//                     resolve(response)
//                 }
//             })
//             .catch(error => {
//                 reject(error)
//             })
//     })
// }


// 发送 POST 请求
// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//       firstName: 'Fred',
//       lastName: 'Flintstone'
//     }
//   });
export const getbanner =()=> api.get('/banner',{})

/*登录*/
export const getQrCode = ()=>api.get('/login/qr/key',{})
export const getQrPic = (key)=>api.get(`/login/qr/create?key=${key}`,{})
export const getQrSta = (key)=>api.get(`/login/qr/check?key=${key}`,{})
export const loginPost = (userphone,password)=>api.get(`/login/cellphone?phone=${userphone}&password=${password}`,{})
export const loginmail = (usermail,password)=>api.get(`/login?email=${usermail}&password=${password}`,{})

/*用户信息*/
export const getUserDetail = (uid)=>api.get(`/user/detail?uid=${uid}`,{})