import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config
  }
);

export default apiClient;