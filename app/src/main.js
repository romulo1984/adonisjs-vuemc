import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

window.BASE_API = 'http://127.0.0.1:3333/api/'
window.API_CONFIG = {
  method: 'get',
  headers : {
    Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTUzODM1NjMzMn0.9JIzGYtK1WZg81u4VIu1N5nmvo4_mAwTjEV8GGPyPaQ',
  }
}

new Vue({
  render: h => h(App)
}).$mount('#app')
