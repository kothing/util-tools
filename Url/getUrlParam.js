/**
 * 获取url指定参数
 * @param {string} key 参数名
 * @returns string | number
 */
const getUrlParam = (key) => {
  if (typeof key !== "string") {
    return null;
  }
  const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
  // 兼容【hash】和【?参数】顺序，例：test.com/#/abc?id=123 和 test.com?id=123/#/abc
  const res = window.location.search.substr(1).match(reg) || window.location.hash.substring(window.location.hash.search(/\?/) + 1).match(reg);
  if (res != null) {
    return decodeURIComponent(res[2]);
  }
};

export default getUrlParam;
