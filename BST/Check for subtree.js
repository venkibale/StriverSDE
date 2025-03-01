class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Helper function to check if two trees are identical
  function areIdenticalTrees(root1, root2) {
    if (root1 === null && root2 === null) return true;
    if (root1 === null || root2 === null) return false;
    if (root1.value !== root2.value) return false;
  
    return (
      areIdenticalTrees(root1.left, root2.left) &&
      areIdenticalTrees(root1.right, root2.right)
    );
  }
  
  // Main function to check if T2 is a subtree of T1
  function isSubtree(T1, T2) {
    if (T2 === null) return true; // An empty tree is a subtree of any tree
    if (T1 === null) return false; // T2 is not empty, but T1 is empty
  
    // Check if the current subtree matches T2
    if (areIdenticalTrees(T1, T2)) return true;
  
    // Recursively check left and right subtrees
    return isSubtree(T1.left, T2) || isSubtree(T1.right, T2);
  }
  