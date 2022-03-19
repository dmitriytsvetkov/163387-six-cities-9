import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {getUserData} from './user-data';
import {UserData} from '../const';

const BACKEND_URL = 'https://9.react.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getUserData(UserData.token);
      if (token) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  return api;
};


