/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const result = []; // 최종 결과를 담을 배열
  const queue = [root]; // 시작은 루트 하나만 큐에 담음

  while (queue.length > 0) {
    const levelSize = queue.length; // 현재 레벨에 있는 노드 개수
    const level = []; // 현재 레벨의 값을 저장할 배열
    for (let i = 0; i < levelSize; i++) {
      // 같은 레벨에 있는 노드를 level에 담기 위해 반복
      // 같은 레벨에 있는 노드 하나씩 꺼내보면서 자식 탐색
      const node = queue.shift(); // 큐에서 맨 앞 노드를 꺼냄
      level.push(node.val); // 해당 노드를 level에 저장
      // 해당 노드에 대한 자식 탐색
      if (node.left) {
        queue.push(node.left); // 왼쪽 자식이 있으면 새롭게 큐 뒤에 추가
      }
      if (node.right) {
        queue.push(node.right); // 오른쪽 자식이 있으면 새롭게 큐 뒤에 추가
      }
      // 큐에 새롭게 추가해서 다음 while 반복 때 위 과정 반복
    }

    result.push(level); // 현재 레벨 전체를 결과에 추가
  }

  return result;
};
