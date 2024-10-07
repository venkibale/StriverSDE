// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.
// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true
var findTarget = function(root, k) {
    let arr = [];

  function hepler(root) {
    if (!root) return;

    hepler(root.left);
    arr.push(root.val);
    hepler(root.right);
  }

  hepler(root);
  
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (arr[start] + arr[end] == k) {
      return true;
    }
    if (arr[start] + arr[end] > k) {
      end--;
    }
    if (arr[start] + arr[end] < k) {
      start++;
    }
  }

  return false;
};