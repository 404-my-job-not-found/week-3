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
var hasCycle = function (head) {
    if (head === null || head.next === null) return false;

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (fast === null || fast.next === null) return false;

        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let List1 = new ListNode(1);
let List2 = new ListNode(2);
let List3 = new ListNode(3);
let List4 = new ListNode(4);
let List5 = new ListNode(5);

List1.next = List2;
List2.next = List3;
List3.next = List4;
List4.next = List5;
// List5.next = List2;

console.log(hasCycle(List1));
