var reverseList = function (head) {
  let reverseHead = null,
    previousNode = null;
  let currentNode = head;

  while (currentNode) {
    if (!reverseHead) {
      previousNode = new ListNode(currentNode.val, null);
      reverseHead = new ListNode(currentNode.val, null);
    } else {
      reverseHead.val = currentNode.val;
      reverseHead.next = previousNode;
      previousNode = new ListNode(currentNode.val, previousNode);
    }

    currentNode = currentNode.next;
  }

  return reverseHead;
};
