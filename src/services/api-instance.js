import axios from 'axios';
import Vue from '../main';

const domain = 'http://omdbapi.com';
const axiosInstance = axios.create({
  baseURL: domain,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

axiosInstance.interceptors.request.use((config) => {
  Vue.$store.dispatch('base/setLoading', true);
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => {
    Vue.$store.dispatch('base/setLoading', false);
    return response;
  },
  (error) => {
    Vue.$store.dispatch('base/setLoading', false);
    return Promise.reject(error);
  },
);

export default axiosInstance;
