import axios from 'axios'

import { serverUrl } from '$/config'

const axiosInstance = axios.create({
  baseURL: serverUrl,
  withCredentials: true
})


export default axiosInstance
