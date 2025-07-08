# Delete Node in a Linked List

There is a singly-linked list head and we want to delete a node node in it.

You are given the node to be deleted node. You will not be given access to the first node of head.

All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:
- The value of the given node should not exist in the linked list.
- The number of nodes in the linked list should decrease by one.
- All the values before node should be in the same order.
- All the values after node should be in the same order.

Custom testing:
- For the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.
- We will build the linked list and pass the node to your function.
- The output will be the entire list after calling your function.

## 번역
단일 링크된 목록 헤드가 있고 그 안에 있는 노드 노드를 삭제하려고 합니다.

삭제할 노드가 노드로 주어집니다. 헤드의 첫 번째 노드에 대한 액세스 권한은 주어지지 않습니다.

링크된 목록의 모든 값은 고유하며, 주어진 노드 노드가 링크된 목록의 마지막 노드가 아니라는 것이 보장됩니다.

주어진 노드를 삭제합니다. 노드를 삭제한다는 것은 메모리에서 노드를 제거하는 것을 의미하지 않습니다. 의미는
- 지정된 노드의 값이 링크된 목록에 존재하지 않아야 합니다.
- 링크된 목록의 노드 수가 하나씩 감소해야 합니다.
- 노드 앞의 모든 값은 같은 순서여야 합니다.
- 노드 뒤의 모든 값은 같은 순서여야 합니다.

사용자 지정 테스트:
- 입력은 링크된 목록의 전체 헤드와 노드가 될 노드를 제공해야 합니다. 노드는 목록의 마지막 노드가 아니어야 하며 목록의 실제 노드여야 합니다.
- 링크된 목록을 작성하고 노드를 함수에 전달합니다.
- 함수를 호출한 후 출력은 전체 목록이 됩니다.

## 예시
```
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
```

```
Input: head = [4,5,1,9], node = 1
Output: [4,5,9]
Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.
```

## 의식의 흐름
### step 1
- 일단 linked list 에 대한 개념부터 정립이 필요.
```
Linked List 란?
자료구조의 한 형태로써 데이터를 Node형태로 저장하며, 각 노드에 값과 다음노드를 가리키는 포인터를 갖는 선형 자료구조이다.
4,5,1,9 라는 배열을 linked list 로 구현한다면
{
  val: 4,
  next: {
    val: 5,
    next: {
      val: 1,
      next: {
        val: 9,
        next: null
      }
    }
  }
}
위와같은 형태로 구현된다.
```
### step 2
- 4 5 1 9 에서 5가 빠지면 4의 next는 1 을 가리키게된다.
- 그러면 노드리스트에 특정 노드값 node가 들어 올 경우 첫 val이 해당값인지 체크하고 그에 대한 처리를, 원하는 값이 아니라면 next를 순회하여 해당값을 찾아 그 상위노드에서 next를 바꿔준다.
- 근데 문제를 잘 못 이해했다.. listNode를 직접 구현하는게 아니라 위의 주석을 예시로 제자리알고리즘을 이용해 작동하게 하는것이였다...

### step 3
- 제자리 에서 변경해야한다는건 결국 현재 값을 그대로 변경해야한다는 것이기때문에 node와 node의 next값을 체크해주고 해당 값이 존재할 경우 변경해주었다.

> LeetCode에서 ListNode를 현재 코드처럼 직접 명시해주면 중복된 식별자라고 오류가 나온다. 자체적으로? 타입을 선언해주는거 같아 해당 class ListNode는 적지않아도된다.