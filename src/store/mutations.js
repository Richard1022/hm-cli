import * as types from './mutations-types';

const mutations = {
  [types.SET_NAME](state, name) {
    state.name = name;
  },
  [types.SET_AGE](state, age) {
    state.age = age;
  },
};
export default mutations;

/**
 * ========================================
 * @example
 */
