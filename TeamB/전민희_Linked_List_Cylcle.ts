function hasCycle(head: ListNode | null): boolean {
  if (head === null) return false;

  let map = new Map<ListNode, boolean>();

  while(head.next) {
      if(!map.has(head)){
          map.set(head, true);
          head = head.next;
      } else {
          return true;
      }
  }
  return false;
};