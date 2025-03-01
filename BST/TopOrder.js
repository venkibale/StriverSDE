function topViewTraversal(root) {
    if (root === null) return [];
  
    const topViewMap = new Map(); // Map to store the first node at each horizontal distance
    const queue = [{ node: root, hd: 0 }]; // Queue with node and its horizontal distance
  
    while (queue.length > 0) {
      const { node, hd } = queue.shift();
  
      // If this horizontal distance hasn't been seen, add it to the map
      if (!topViewMap.has(hd)) {
        topViewMap.set(hd, node.value);
      }
  
      // Enqueue left and right children with updated horizontal distances
      if (node.left !== null) {
        queue.push({ node: node.left, hd: hd - 1 });
      }
      if (node.right !== null) {
        queue.push({ node: node.right, hd: hd + 1 });
      }
    }
  
    // Sort the horizontal distances and construct the result
    const sortedHDs = Array.from(topViewMap.keys()).sort((a, b) => a - b);
    return sortedHDs.map(hd => topViewMap.get(hd));
  }
  