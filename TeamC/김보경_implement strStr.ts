function strStr(haystack: string, needle: string): number {
  if (needle.length > haystack.length) {
    return -1;
  }

  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  }

  return -1;
}
