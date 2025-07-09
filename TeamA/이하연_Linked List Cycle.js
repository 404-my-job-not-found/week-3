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

// 내가 직접 지나간 노드를 기억해서 다시 보면 사이클이라고 생각함 -> 그래서 Set 씀
// 처음엔 재귀로 할까 생각했다가.. 노드가 너무 길면 stackoverflow 될 거 같아서
var hasCycle = function (head) {
  const visited = new Set();

  while (head) {
    if (visited.has(head)) return true;
    visited.add(head);
    head = head.next;
  }

  return false;
};

// 가장 좋은 건 투 포인터 -> slow (한 칸씩 이동)와 fast (두 칸씩 이동)가 만나면 true
// 미친 이걸 어케 앎
