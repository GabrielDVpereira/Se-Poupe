import axios from 'axios';
import { AsyncStorage } from 'react-native';
import env from '../env/request';

export const api = axios.create({
  baseURL: env.apiUrl,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
  async config => {
    const accessToken = await AsyncStorage.getItem('token');
    config.headers['x-auth-token'] = accessToken;
    return config;
  },
  error => {
    console.log(error);
  }
);
