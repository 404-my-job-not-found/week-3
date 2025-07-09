function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;

    if (slow === fast) {
      return true; // 사이클 존재
    }
  }

  return false; // 사이클 없음
}
