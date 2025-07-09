function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  //현재 노드 더하기
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
