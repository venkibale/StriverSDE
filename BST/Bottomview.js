function bottomViewTraversal(root) {
    if (root === null) return [];
  
    const bottomViewMap = new Map(); // Map to store the bottom-most node at each horizontal distance
    const queue = [{ node: root, hd: 0 }]; // Queue with node and its horizontal distance
  
    while (queue.length > 0) {
      const { node, hd } = queue.shift();
  
      // Update the map with the current node (this ensures the bottom-most node is recorded)
      bottomViewMap.set(hd, node.value);
  
      // Enqueue left and right children with updated horizontal distances
      if (node.left !== null) {
        queue.push({ node: node.left, hd: hd - 1 });
      }
      if (node.right !== null) {
        queue.push({ node: node.right, hd: hd + 1 });
      }
    }
  
    // Sort the horizontal distances and construct the result
    const sortedHDs = Array.from(bottomViewMap.keys()).sort((a, b) => a - b);
    return sortedHDs.map(hd => bottomViewMap.get(hd));
  }
  