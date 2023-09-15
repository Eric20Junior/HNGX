import axios from "axios";

const baseURL = 'https://api.themoviedb.org/3'

const api_key = localStorage.setItem('api_key', '48e29f882d6e373935bcaa2d19ec8083')

const axiosInstance = axios.create({
    baseURL: baseURL,
    api_key: api_key,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json', 
    },
})

export default axiosInstance