/* ============
//  * Main File
//  * ============
//  *
//  * Will initialize the application.
//  */

import '@babel/polyfill';
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import plugins from './plugins';
import 'nprogress/nprogress.css';

const { router, i18n } = plugins;

Vue.config.productionTip = false;

/* tslint:disable:no-unused-expression */
new Vue({
  /**
   * Bind the Vue instance to the HTML.
   */
  el: '#app',

  /**
   * The localization plugin.
   */
  i18n,

  /**
   * The router.
   */
  router,

  /**
   * The Vuex store.
   */
  store,

  /**
   * Will render the application.
   *
   * @param {Function} h Will create an element.
   */
  render: h => h(App)
});
