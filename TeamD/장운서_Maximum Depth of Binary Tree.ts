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

function maxDepth(root: TreeNode | null): number {
	if (root === null) return 0

	const left = maxDepth(root.left) // 왼쪽 자식 노드 쪽 깊이
	const right = maxDepth(root.right) // 오른쪽 자식 노드 쪽 깊이

	return Math.max(left, right) + 1
}
