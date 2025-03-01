function spiralTraversal(root) {
    if (root === null) return [];
  
    const result = [];
    const queue = [root];
    let leftToRight = true;
  
    while (queue.length > 0) {
      const levelSize = queue.length; // Nodes at the current level
      const currentLevel = [];
  
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
  
        if (leftToRight) {
          currentLevel.push(node.value);
        } else {
          currentLevel.unshift(node.value);
        }
  
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
  
      result.push(...currentLevel); // Add the processed level to the result
      leftToRight = !leftToRight; // Toggle direction
    }
  
    return result;
  }
  