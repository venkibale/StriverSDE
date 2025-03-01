function diagonalTraversal(root) {
    if (root === null) return [];
  
    const diagonalMap = new Map(); // Map to store nodes grouped by diagonal level
    const queue = [{ node: root, diagonal: 0 }]; // Queue with node and its diagonal level
  
    while (queue.length > 0) {
      const { node, diagonal } = queue.shift();
  
      // Add the node to the corresponding diagonal group
      if (!diagonalMap.has(diagonal)) {
        diagonalMap.set(diagonal, []);
      }
      diagonalMap.get(diagonal).push(node.value);
  
      // Enqueue left child with the next diagonal level
      if (node.left !== null) {
        queue.push({ node: node.left, diagonal: diagonal + 1 });
      }
  
      // Enqueue right child with the same diagonal level
      if (node.right !== null) {
        queue.push({ node: node.right, diagonal: diagonal });
      }
    }
  
    // Sort diagonals and construct the result
    const sortedDiagonals = Array.from(diagonalMap.keys()).sort((a, b) => a - b);
    return sortedDiagonals.map(diagonal => diagonalMap.get(diagonal));
  }
  