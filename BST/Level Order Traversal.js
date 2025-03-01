function levelOrderTraversal(root) {
    if (root === null) return [];
  
    const result = [];
    const queue = [root]; // Initialize the queue with the root node
  
    while (queue.length > 0) {
      const currentNode = queue.shift(); // Dequeue the first node
      result.push(currentNode.value);    // Add its value to the result array
  
      // Enqueue the left and right children if they exist
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  
    return result;
  }
  