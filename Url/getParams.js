/**
 * Get url all paramters
 * @param {string} url url
 * @returns object
 */
const getUrlParams = (url) => {
  const uri = decodeURIComponent(url || window.location.href);
  // [...] 位于括号之内的任意字符
  // [^...] 不在括号之中的任意字符
  const reg = /[?&]([^?&#]+)=([^?&#]+)/g;
  const params = {};
  let ret = reg.exec(uri);
  while (ret) {
    params[ret[1]] = ret[2];
    ret = reg.exec(uri);
  }
  return params;
};

export default getUrlParams;
