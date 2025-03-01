function postOrderTraversal(node, result = []) {
    if (node !== null) {
      postOrderTraversal(node.left, result);
      postOrderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  }
  