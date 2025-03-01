function verticalOrderTraversalByDistance(root) {
    if (root === null) return [];
  
    const distanceMap = new Map(); // Map to store nodes grouped by distance
    const queue = [{ node: root, distance: 0 }]; // Initialize queue with root and distance 0
  
    while (queue.length > 0) {
      const { node, distance } = queue.shift();
  
      // Add the node's value to the corresponding distance group
      if (!distanceMap.has(distance)) {
        distanceMap.set(distance, []);
      }
      distanceMap.get(distance).push(node.value);
  
      // Enqueue left and right children with updated distances
      if (node.left !== null) {
        queue.push({ node: node.left, distance: distance - 1 });
      }
      if (node.right !== null) {
        queue.push({ node: node.right, distance: distance + 1 });
      }
    }
  
    // Sort the distances and construct the result
    const sortedDistances = Array.from(distanceMap.keys()).sort((a, b) => a - b);
    const result = sortedDistances.map(distance => distanceMap.get(distance));
  
    return result;
  }
  