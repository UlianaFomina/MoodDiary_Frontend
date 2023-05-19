import axios from "axios";

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
    return null;
})

export default api;
