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

function reverseList(head: ListNode | null): ListNode | null {
	let prev: ListNode | null = null
	let curr: ListNode | null = head

	while (curr !== null) {
		let next: ListNode | null = curr.next // 다음 노드 저장
		curr.next = prev // 현재 노드의 next를 이전 노드로 변경
		prev = curr // prev를 현재 노드로 업데이트
		curr = next // curr을 다음 노드로 이동
	}

	return prev
}
