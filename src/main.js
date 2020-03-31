import Vue from 'vue'
import App from './App.vue'
import {requestExt2} from './network/request.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res);
// })
// axios.get('http://123.207.32.32:8000/home/data?type=sell&page=3').then(res => {
//   console.log(res);
// })

// request({
//   url:'/home/multidata' 
// },res => {
//   console.log(11111111111);
  
//   console.log(res)
// },err => {
//   console.log(err);
  
// })

// requestExt({
//   baseConfig:'/home/multidata',
//   success:function (res) {
//     console.log(11111111111);
//     console.log(res)
//   },
//   failure:function (err) {
//     console.log(err);
//   }
// })

// requestExt1({baseConfig:'/home/multidata'}).then((res,err) => {
//   console.log(11111111111);
//   console.log(res)
//   console.log(err)
// })

requestExt2({baseConfig:'/home/multidata'}).then(res => {
  console.log(res);
  
}).catch(err => {
  console.log(err);
  
})