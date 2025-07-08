// 첫번째 풀이, 틀림
var hasCycle = function (head) {
  const nextNode = new Map();
  let result = false;

  while (true) {
    if (!head || !head.next) break;

    if (nextNode.get(head.next.val) === head.val) {
      result = true;
      break;
    } else {
      nextNode.set(head.next.val, head.val);
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
