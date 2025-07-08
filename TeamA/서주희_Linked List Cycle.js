// 첫번째 풀이, 틀림
var hasCycle = function (head) {
  const num = new Map();
  let result = false;

  while (head) {
    if (num.has(head.val)) {
      result = true;
      break;
    } else {
      num.set(head.val, true);
    }

    head = head.next;
  }

  return result;
};

// 플로이드 사이클 탐지 알고리즘 사용, 정답
var hasCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
};
