# Implement strStr()

Given two strings ```needle``` and ```haystack```, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

## 번역
```needle```과 ```haystack``` 두 문자열이 주어지면 haystack에서 needle이 처음 발생한 인덱스를 반환하고, needle이 haystack에 포함되지 않으면 -1을 반환합니다.

## 예시
```
Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
```

```
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
```

## 의식의 흐름
### step 1
- ```includes``` 나 ```indexOf``` 같은걸 이용해보자.
- ```indexOf``` 로 바로 통과...