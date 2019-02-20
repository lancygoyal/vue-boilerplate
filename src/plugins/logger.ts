/* ============
 * Logger
 * ============
 *
 * Customizable logging functionality for Vue.js.
 *
 * https://github.com/justinkames/vuejs-logger
 */

import Vue from 'vue';
import VueLogger from 'vuejs-logger';

const isProduction = process.env.NODE_ENV === 'production';
const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: true,
  separator: '|',
  showConsoleColors: true
};

Vue.use(VueLogger, options);
