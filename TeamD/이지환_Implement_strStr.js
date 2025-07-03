/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const needleLength = needle.length;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substring(i, needleLength + i) === needle) {
            return i;
        }
    }
    return -1;
};

const haystack = "sadbutsad";
const needle = "sad";

console.log(strStr(haystack, needle));
