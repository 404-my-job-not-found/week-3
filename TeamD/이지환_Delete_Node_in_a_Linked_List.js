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

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let list1 = new ListNode(4);
let list2 = new ListNode(5);
let list3 = new ListNode(1);
let list4 = new ListNode(9);

list1.next = list2;
list2.next = list3;
list3.next = list4;

var deleteNode = function (node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

deleteNode(list2);
