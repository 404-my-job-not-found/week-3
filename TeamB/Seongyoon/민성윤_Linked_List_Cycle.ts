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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// 배열을 ListNode 형식으로 변환하는 함수
function arrayToListNode(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head: ListNode = { val: arr[0], next: null };
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = { val: arr[i], next: null };
    current = current.next;
  }
  return head;
}


function hasCycle(head: ListNode | null): boolean {
  if (head === null) return false;

  let result = -1;
  let valueList: ListNode[] = [];

  while (head !== null) {
    if (head.next === null) return false;
    if (valueList.includes(head.next)) {   
      result = valueList.indexOf(head.next);
      break;
    }
    valueList.push(head.next);
    head = head.next;
  }
  return result === -1 ? false : true;
}



// Test Case 1 - expected: true
hasCycle(arrayToListNode([3,2,0,-4]))
hasCycle({
  val: 3,
  next: {
    val: 2,
    next: {
      val: 0,
      next: {
        val: -4,
        next: null,
      }
    }
  }
})
// Test Case 2 - expected: true
hasCycle(arrayToListNode([1,2]));

// Test Case 3 - expected: false
hasCycle(arrayToListNode([-21,10,17,8,4,26,5,35,33,-7,-16,27,-12,6,29,-12,5,9,20,14,14,2,13,-24,21,23,-21,5]));
