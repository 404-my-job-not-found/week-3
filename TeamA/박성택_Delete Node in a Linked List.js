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
var deleteNode = function(node) {
    // console.log(node.val) // 5
    // console.log(node.next) // [1,9]
    // console.log(node.next.val) // 1
    // console.log(node.next.next) // [9]

    node.val = node.next.val;
    node.next = node.next.next;
    // [4,5,1,9] -> [4,1,9]
};