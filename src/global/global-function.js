/**
 * 1.(函数参数必填默认值)
 * @param {string} arg 参数名
 * @return 抛出错误
 */
export const required = (arg) => {
  throw new Error(`arguments ${arg || ''} is required`);
};

/**
 * 2.(对象类型判断)
 * @param {object} obj 要判断类型的对象
 * @return {string} 类型字符串
 * @example  const toString = Object.prototype.toString // toString.call(obj)
 */
export function type(obj) {
  const classType = {};
  // 生成一个classType的映射
  'Boolean Number String Function Array Date Regexp Object Error Null undefined '.split(' ').map((item) => {
    classType[`[object ${item}]`] = item.toLowerCase();
  });
  return typeof obj === 'object' || typeof obj === 'function' ?
    classType[Object.prototype.toString.call(obj)] || 'object' :
    typeof obj;
}
