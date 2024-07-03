import Vue from 'vue'

// axios
import axios from 'axios'

import { $themeConfig } from '@themeConfig'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL:  $themeConfig.app.domainPath + '/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

Vue.prototype.$http = axiosIns

export default axiosIns
