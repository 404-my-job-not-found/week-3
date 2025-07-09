/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // 이거 있으면 더 늦을듯
  // if (!haystack.includes(needle)) return -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) == needle) return i;
  }

  return -1;
};
