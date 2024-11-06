import axios, {AxiosInstance, InternalAxiosRequestConfig} from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token: string | null = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token ?? ''}`;
    }
    return config;
});

export default api;