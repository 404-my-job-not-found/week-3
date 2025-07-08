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
const reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let nextTemp = curr.next; // 다음 노드를 저장
    curr.next = prev; // 현재 노드의 방향을 반대로
    prev = curr; // prev를 한 칸 앞으로
    curr = nextTemp; // curr도 한 칸 앞으로
  }

  return prev; // prev가 새로운 head
};
