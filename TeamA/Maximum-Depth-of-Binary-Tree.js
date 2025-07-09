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
 * @return {number}
 */
const maxDepth = function (root) {
  // 현재 node가 null이면 깊이 0으로 간주
  if (root === null) return 0;

  // 왼쪽 서브트리의 최대 깊이를 재귀적으로 계산
  const left = maxDepth(root.left);

  // 오른쪽 서브트리의 최대 깊이를 재귀적으로 계산
  const right = maxDepth(root.right);

  // 현재 노드까지 포함해서 가장 깊은 쪽에 +1
  // = 현재 이 노드가 포함된 깊이를 의미
  return Math.max(left, right) + 1;
};
