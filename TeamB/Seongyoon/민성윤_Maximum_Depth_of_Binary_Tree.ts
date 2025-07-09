/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * 배열을 입력받아 이진 트리(TreeNode)로 변환하는 함수입니다.
 * 배열은 LeetCode의 트리 입력 방식([3,9,20,null,null,15,7])을 따릅니다.
 */
function arrayToTreeNode(arr: (number | null)[]): TreeNode | null {
  if (!arr.length || arr[0] === null) return null;

  const root = new TreeNode(arr[0]);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;

  while (queue.length && i < arr.length) {
    const current = queue.shift();
    if (current) {
      // 왼쪽 자식
      if (i < arr.length && arr[i] !== null) {
        current.left = new TreeNode(arr[i]!);
        queue.push(current.left);
      }
      i++;
      // 오른쪽 자식
      if (i < arr.length && arr[i] !== null) {
        current.right = new TreeNode(arr[i]!);
        queue.push(current.right);
      }
      i++;
    }
  }

  return root;
}

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);
  console.log(root, left, right);
  return 1 + Math.max(left, right);
}

maxDepth(arrayToTreeNode([3, 9, 20, null, null, 15, 7]));
