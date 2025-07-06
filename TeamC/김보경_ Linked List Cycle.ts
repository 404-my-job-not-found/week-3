function hasCycle(head: ListNode | null): boolean {
  let turtle = head;
  let rabbit = head;
  while (rabbit !== null && rabbit.next !== null) {
    turtle = turtle.next;
    rabbit = rabbit.next.next;

    if (turtle === rabbit) {
      return true;
    }
  }
  return false;
}
