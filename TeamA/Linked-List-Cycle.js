/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  const visited = new Set(); // 이미 방문한 노드들을 저장할 Set

  let current = head;

  while (current) {
    if (visited.has(current)) {
      return true; // current가 이미 visited에 있음 -> 사이클 true
    }

    visited.add(current); // 현재 노드를 방문한 것으로 기록
    current = current.next; // 다음 노드로 이동
  }
  return false; // 끝까지 갔는데 중복 노드 없음 -> 사이클 false
};
