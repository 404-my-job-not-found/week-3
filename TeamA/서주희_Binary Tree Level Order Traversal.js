var levelOrder = function (root) {
  const result = [];

  const findNode = (root, depth) => {
    if (result[depth]) {
      result[depth].push(root.val);
    } else {
      result.push([root.val]);
    }

    if (root?.left) {
      findNode(root.left, depth + 1);
    }
    if (root?.right) {
      findNode(root.right, depth + 1);
    }
  };

  if (root) {
    findNode(root, 0);
  }

  return result;
};
