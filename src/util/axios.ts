import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axios = Axios.create({
    baseURL: '/',
    proxy: {
        auth: {
            username: 'mannix',
            password: '123456',
        },
        host: '127.0.0.1',
        port: 7001,
    },
});

axios.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
}, async (error) => {
    return Promise.reject(error);
});

axios.interceptors.response.use((response: AxiosResponse) => {
    return response;
}, async (error) => {
    return Promise.reject(error);
});

export default axios;
