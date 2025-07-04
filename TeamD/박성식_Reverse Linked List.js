const reverseList = (head) => {
  let prev = null;
  let current = null;

  while (head) {
    current = head.next;
    head.next = prev;
    prev = head;
    head = current;
  }

  return prev;
};

const Input = [1, 2, 3, 4, 5];
const Output = [5, 4, 3, 2, 1];

const Input2 = [1, 2];
const Output2 = [2, 1];

const Input3 = [];
const Output3 = [];
