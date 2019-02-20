// /* ============
//  * Plugins
//  * ============
//  *
//  * Import and bootstrap the plugins.
//  */

import './vuex';
import './axios';
import router from './vue-router';
import i18n from './vue-i18n';
import './register-service-worker';
import './logger';
import './validation';
import './idx';
import './vuetify';

export default {
  router,
  i18n
};
