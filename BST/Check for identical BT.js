class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function areIdenticalTrees(root1, root2) {
    // Base case: both nodes are null
    if (root1 === null && root2 === null) {
      return true;
    }
  
    // If one node is null and the other is not
    if (root1 === null || root2 === null) {
      return false;
    }
  
    // Check if the current nodes are identical
    if (root1.value !== root2.value) {
      return false;
    }
  
    // Recursively check left and right subtrees
    return (
      areIdenticalTrees(root1.left, root2.left) &&
      areIdenticalTrees(root1.right, root2.right)
    );
  }

  
  // Create two identical trees
const root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);

// Create a different tree
const root3 = new TreeNode(1);
root3.left = new TreeNode(4);
root3.right = new TreeNode(3);

console.log(areIdenticalTrees(root1, root2)); // Output: true (identical)
console.log(areIdenticalTrees(root1, root3)); // Output: false (different)
