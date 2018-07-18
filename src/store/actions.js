import * as types from './mutations-types';

export const bothModify = ({ commit }, { name, age }) => {
  commit(types.SET_NAME, name);
  commit(types.SET_AGE, age);
};

export const bothMinus = ({ commit }, { name, age }) => {
  commit(types.SET_NAME, name);
  commit(types.SET_AGE, age);
};

/**
 * ========================================
 * @example
 */

