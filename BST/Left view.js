function leftView(root) {
    if (root === null) return [];
  
    const result = [];
    const queue = [{ node: root, level: 0 }];
  
    while (queue.length > 0) {
      const { node, level } = queue.shift();
  
      // If this level hasn't been seen, add the node to the result
      if (result.length === level) {
        result.push(node.value);
      }
  
      // Enqueue left child first, then right child
      if (node.left !== null) {
        queue.push({ node: node.left, level: level + 1 });
      }
      if (node.right !== null) {
        queue.push({ node: node.right, level: level + 1 });
      }
    }
  
    return result;
  }
  