/* ============
 * IDX
 * ============
 *
 * Library for accessing arbitrarily nested, possibly
 * nullable properties on a JavaScript object.
 * idx is a utility function for traversing properties on objects and arrays.
 *
 * https://github.com/facebookincubator/idx
 */

import Vue from 'vue';
import idx from 'idx';

// This exports the plugin object.
const plugin = {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install(Vue: any) {
    Vue.prototype.idx = idx;
  }
};

Vue.use(plugin);
