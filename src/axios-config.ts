import Axios from 'axios';

import { getEnv } from './environment';

const axios = Axios.create({
  baseURL: getEnv.apiUrl,
  timeout: 10000,
});

axios.interceptors.request.use(
  async (config) => {
    // Return our config
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axios };
