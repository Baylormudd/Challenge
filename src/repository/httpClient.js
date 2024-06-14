//-----------------------------------------------------------------
import axios from 'axios'
//-----------------------------------------------------------------
export const httpClient = axios.create({ baseURL: 'https://reqres.in/api/' })
//-----------------------------------------------------------------
httpClient.interceptors.request.use(
  request => {
    return request
  },
  error => {
    return Promise.reject(error)
  }
)
//-----------------------------------------------------------------
httpClient.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
