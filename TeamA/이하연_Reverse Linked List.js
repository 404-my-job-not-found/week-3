/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// curr.next = prev; 이 코드가 핵심임
// 내 전에 있었을 애를, 내 뒤로 보내는 느낌
// 그래서 curr.next를 잃어버리지 않게 next로 저장해야 함
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr) {
    const next = curr.next; // 다음 노드 기억
    curr.next = prev; // 현재 노드의 포인터를 반대로
    prev = curr; // prev를 한 칸 앞으로
    curr = next; // curr도 다음으로
  }

  return prev; // prev가 새 head
};
