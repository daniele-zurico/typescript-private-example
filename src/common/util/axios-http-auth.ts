import axios from 'axios';
import { environment } from 'environments/environment.test';

const instance = axios.create({
    baseURL: environment.firebase.googleUrl,
});

instance.interceptors.request.use((config) => {
    config.url += `?key=${environment.firebase.apiKey}`
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});

export default instance;
