const hasCycle = (head) => {
  let rabbit = head;
  let turtle = head;

  while (rabbit && rabbit.next) {
    rabbit = rabbit.next.next;
    turtle = turtle.next;

    if (turtle === rabbit) {
      return true;
    }
  }

  return false;
};
