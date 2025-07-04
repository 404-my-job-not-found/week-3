/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
  node.val = node.next.val;
  node.next = node.next.next;
}

// 노드 - 값(value), 다음 노드 주소(next)에 대한 정보를 담고 있다.
//head의 첫 노드에는 접근할 수 없고, 각 노드는 자기 다음 노드만 알고 있다.
// node의 value,next를 바꿔서 given node를 삭제하는 것처럼 보이게 한다.
