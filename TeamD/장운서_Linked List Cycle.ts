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

function hasCycle(head: ListNode | null): boolean {
	if (!head || !head.next) return false

	let fast: ListNode | null = head
	let slow: ListNode | null = head

	while (fast && fast.next) {
		slow = slow.next! // 한 칸 이동
		fast = fast.next.next! // 두 칸 이동

		if (slow === fast) {
			return true // 만나면 사이클 존재
		}
	}
	return false
}
