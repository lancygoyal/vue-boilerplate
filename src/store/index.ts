import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/account';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user
  },
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production'
});
