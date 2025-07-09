function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  const valList = [];
  while (head && head.val !== null) {
    valList.push(head.val);
    head = head.next;
  }

  for (let i = 0; i < valList.length; i++) {
    const newNode = new ListNode(valList[i]);
    newNode.next = head;
    head = newNode;
  }
  return head;

};