# Reverse Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
## 해석
단일 링크된 목록의 헤드가 주어지면 목록을 반전하고 반전된 목록을 반환합니다.

Follow up: 링크된 목록은 반복적으로 또는 재귀적으로 되돌릴 수 있습니다. 두 가지를 모두 구현할 수 있나요?
## 예시
```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

```
Input: head = [1,2]
Output: [2,1]
```

```
Input: head = []
Output: []
```

## 의식의 흐름
### step 1
- 배열의 형태면 그냥 뒤집으면 될탠데 연결리스트 특성상 next가 다음 노드를 가리키기 때문에 단순히 뒤집으면 안될꺼같음.
- 어떻게 풀어낼까 고민하다가 Follow up 을 보면 재귀에 대한 이야기가 있다. 재귀함수 를 구현해서 풀게되면 가장 안쪽부터 바깥으로 나오게 될태니 그점을 이용해서 새로운 NodeList를 만들면 되지않을까?
```
1,2,3,4,5 가 있다고 가정하면
return reverseList(head.next);

이런식으로 진행하게 되면 결국 5까지 가게되고, next가 존재하지않을경우 return {
  val: head.val,
  next: head.next
}
이런식으로 리턴하게된다면 어떨까..?

1 -> 2 -> 3 -> 4 -> 5
5, null
{5, {4, {3, {2, {1}}}}}
```
### step 2
- 뭔가뭔가 잘 안풀림...
- 일단 재귀말고 정공으로 해보자.
```
1 {2, {3, {4, {5}}}}
정렬을 뒤집으면..?
prev current next
current = prev
prev = next
next = current
이후 current 는 next로 변경(다음 노드를 뒤집어야 하기 때문)
{1 {2 {3 {4 {5}}}}}
{2 {1 {3{ 4 {5}}}}}
{3 {2 {1 {4 {5}}}}}
{4 {3 {2 {1 {5}}}}}
{5 {4 {3 {2 {1}}}}}

이런식으로 진행되지않으려나..?
```
- 재귀로 하는방법은 좀 더 고민해보는걸루...