/* ============
 * Actions for the account module
 * ============
 *
 * The actions that are available on the
 * account module.
 */

import * as types from './mutation-types';

export const find = ({ commit }: { commit: any }) => {
  /*
   * Normally you would use a api to fetch the account:
   */
  const account = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'jonh@doe.com'
  };

  commit(types.FIND, account);
};

export default {
  find
};
