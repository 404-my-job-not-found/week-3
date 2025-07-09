# Linked List Cycle
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

## 번역
연결된 목록의 머리인 head가 주어지면 연결된 목록에 주기가 있는지 여부를 결정합니다.

다음 포인터를 계속 따라가면 다시 도달할 수 있는 노드가 목록에 있다면 링크된 목록에 사이클이 있는 것입니다. 내부적으로 pos는 꼬리의 다음 포인터가 연결된 노드의 인덱스를 나타내는 데 사용됩니다. pos는 파라미터로 전달되지 않는다는 점에 유의하세요.

연결된 목록에 사이클이 있으면 참을 반환합니다. 그렇지 않으면 false를 반환합니다.

## 예시
```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

## 의식의 흐름
### step 1
- 문제를...이해하는게 너무 힘듦.....
- 일단 이해한게 맞다면 다음과 같음
```javascript
{
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: isNext ? isNext : null
    }
  }
} 
```
대충 이런식으로 있다고 가정할때 isNext가 지금까지 지나온 어느 특정 노드의 값(ex. 2) 를 가리킨다면 그건 순회하는 노드라고 판단하고 해당 노드의 인덱스를 반환함.
```javascript
{
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 2,
        next: {...next}
      }
    }
  }
}
```
이런식으로..? 위 같은 경우 val 은 1번 Index에 존재하기때문에 사이클을 멈추고 1을 반환하면 끝이지 않을까 생각.
### step 2
- 그러면 이걸 이제 코드로 구현한다면... while문을 통해 next값이 null이 나올때까지 순환함.
- null이 나올때까지 순환하는 이유는 특정값이 다시 나타나기전까지 순환시킬꺼고, null이 나올때까지 순환이 중간에 멈추지않는다면 이건 순환이 없는 노드라고 판단되기때문.
- 순환도중 기존 val을 가리키는 값이 나오게되면 그 즉시 순환을 멈추고 해당 val의 index를 리턴함.
- 그렇다는건.. 중복이 일어나지않는이상? 계속 순환한다는거고 val을 담는 values라는 배열이 존재할꺼고, 해당 배열안에 next가 가리키는 val값이 있는지 확인하면될듯?
### step 3
- 간과한 점.
  - 단순히 val을 비교하는게 아닌 next의 객체 그 자체를 비교해야함.
  - 그냥 val만 비교했더니 val이 같은 값이 나오면 냅다 true로 리턴되어 에러가 발생했음.
  - val을 비교하는게 아닌 객체 의 모습자체가 같은지를 비교해야함.
  - 그러면 number[] 안에 val만 담는방식에서 바뀌어야할듯..?
  - number[]에서 그냥 노드자체를 저장하게 객체형태인 NodeList[] 를 담도록 수정

