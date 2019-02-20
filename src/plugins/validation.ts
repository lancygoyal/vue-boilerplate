/* ============
 * Validation
 * ============
 *
 */

import Vue from 'vue';

const plugin = {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install(Vue: any) {
    Vue.prototype.validate = {
      email: (val: any) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          val
        );
      },
      mobile: (val: any) => {
        return /^\+?\d{9,12}$/.test(val);
      },
      string: (val: any) => {
        return /^\S[a-zA-Z\x20]{0,25}$/.test(val);
      },
      password: (val: any) => {
        return /^(?=.*[A-Za-z])(?=.*[0-9!@#$%^&*_])[A-Za-z0-9!@#$%^&*_]{8,32}$/.test(val);
      },
      number: (val: any) => {
        return /^[0-9]{0,}$/.test(val);
      },
      url: (url: any) => {
        return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(url);
      },
      alphaNumeric: (val: any) => {
        return /^[a-zA-Z0-9]{0,20}$/.test(val);
      }
    };
  }
};

Vue.use(plugin);
