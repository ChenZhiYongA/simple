import axios from 'axios'
import store from '@/store'
// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,// get local API address
    timeout: 5000
})
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['token'] = 'token' // config token
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        // if the custom code is not 200, it is judged as an error.
        if (res.code !== 200) {
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service
