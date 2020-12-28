/* eslint-disable no-console */
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.message === 'Network Error') {
      error.response = {
        status: 500,
        data: {
          message: 'Network Error | Network Unavailable'
        }
      }
    }
    if (error.response.status === 401) {
      console.log("un authorized");
    }
    if (error.response.status === 500) {
      if (!error.response.data || !error.response.data.message) {
        error.response = {
          status: 500,
          data: {
            message: 'Something went wrong'
          }
        }
      }
    }
    return Promise.reject(error);
});

export default axios
