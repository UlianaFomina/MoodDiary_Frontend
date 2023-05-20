import axios from "axios";

//FOR PRODUCTION BACKEND ------> https://mooddiarybackend-production.up.railway.app

export const API_URL = 'http://localhost:8080'

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

api.interceptors.request.use((config) => {
    let token = sessionStorage.getItem('token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
        return config
    }
    return config;
})

export default api;
