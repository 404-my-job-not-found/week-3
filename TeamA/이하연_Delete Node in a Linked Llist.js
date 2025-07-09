/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

// 아니 ㅋㅋ ㅅㅂ "There is a singly-linked list head and we want to delete a node node in it." 라면서...
// head가 주어진 것처럼 보이지만, 사실 내부적으로는 어떻게 연결되어있는지는 모른다
// head = [4,5,1,9], node = 1 라고 주어졌어도, 만약 4 -> 5 -> 1 -> 9 로 연결되어 있다면, [4, 5, 9] 로 리턴
// 4 -> 1 -> 9 -> 5 로 연결된 리스트였다면, [4, 9, 5] 로 리턴하게끔 코드를 짜라 (함수 시그니처를 보고)

// 일단 나는 알고 있는 게 node 밖에 없음 (linked list에 뭐가 있는지 아무것도 모름)
// 하지만 node로부터 알 수 있는 정보가 있지
// 1. node의 val은 '누군가1'의 next다. 그리고 그 '누군가1'는 이전 노드
// 2. node의 next는 '누군가2'의 val이다. 그리고 그 '누군가2'는 다음 노드
// 3. '누군가1'과 '누군가2'도 val과 next가 있을 거라고 굳게 믿자
// 즉, node를 삭제한다는 건, node의 val과 next에 next node의 정보들을 끼워넣으면 된다는 것
// 근데 그러면, '누군가1'의 next는 안 바꿔줘도 되는 건가? -> yes, node로 간 뒤에 node에다가 node.next의 정보를 넣어주는 거임
// 근데 그러면, '누군가2'는 출력에서 사라지게 되는 건가? 왜냐면 node에서 곧바로 '누군가2'의 next로 가는 거니까? -> yes, 가비지 컬렉션 대상
