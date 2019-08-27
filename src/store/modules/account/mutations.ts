/* ============
 * Mutations for the account module
 * ============
 *
 * The mutations that are available on the
 * account module.
 */

import { FIND } from './mutation-types';

export default {
  [FIND](state: any, account: any) {
    state.email = account.email;
    state.firstName = account.firstName;
    state.lastName = account.lastName;
  }
};