import axios from 'axios'

import { serverUrl } from '@code-gear/config'

const axiosInstance = axios.create({
  baseURL: serverUrl,
  withCredentials: true
})

export default axiosInstance
