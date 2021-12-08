import axios from 'axios'

const http = axios.create({
  baseURL: ''
})

http.interceptors.request.use(async (req) => {
  console.log(`request: ${req}`)
})

http.interceptors.response.use(async (res) => {
  console.log(`response: ${res}`)
}, async (error) => {
  console.error(`response error: ${error}`)
  return Promise.reject(error)
})

export default http
