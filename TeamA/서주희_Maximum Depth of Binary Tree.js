var maxDepth = function (root) {
  let result = 0;

  const findNode = (root, cnt) => {
    result = Math.max(result, cnt);

    if (root?.left) {
      findNode(root.left, cnt + 1);
    }
    if (root?.right) {
      findNode(root.right, cnt + 1);
    }
  };

  if (root) {
    findNode(root, 1);
  }

  return result;
};
