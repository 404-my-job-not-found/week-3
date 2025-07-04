const strStr = (haystack, needle) => {
  return haystack.split(needle).length > 1
    ? haystack.split(needle)[0].length
    : -1;
};

console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1
