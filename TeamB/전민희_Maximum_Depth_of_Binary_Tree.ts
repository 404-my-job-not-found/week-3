function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;
  
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
};