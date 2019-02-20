/* ============
 * Axios
 * ============
 *
 * Promise based HTTP client for the browser and node.js.
 * Because Vue Resource has been retired, Axios will now been used
 * to perform AJAX-requests.
 *
 * https://github.com/mzabriskie/axios
 */

import Vue from 'vue';
import Axios from 'axios';
// import store from '@/store';

// This exports the plugin object.
const plugin = {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install(Vue: any, options: any) {
    Axios.defaults.baseURL = options ? options.API_LOCATION : '/api/v1/';
    Axios.defaults.headers.common.Accept = 'application/json';
    Axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401 && options.LOGOUT) {
          // store.dispatch(options.LOGOUT);
        }
        return Promise.reject(error);
      }
    );
    Vue.prototype.http = Axios;
  }
};

Vue.use(plugin);
