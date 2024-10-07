function countSubarrays(arr, target) {
    let count = 0;
    let windowSum = 0;
    let start = 0;
  
    for (let end = 0; end < arr.length; end++) {
      windowSum += arr[end];
  
      while (windowSum > target) {
        windowSum -= arr[start];
        start++;
      }
  
      if (windowSum === target) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage
  console.log(countSubarrays([1, 2, 3, 4, 2, 3], 6)); // Output: 3