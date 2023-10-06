import { serverUrl } from '@code-gear/config'
import axios         from 'axios'

const axiosInstance = axios.create({
  baseURL: serverUrl,
  withCredentials: true
})

export default axiosInstance
