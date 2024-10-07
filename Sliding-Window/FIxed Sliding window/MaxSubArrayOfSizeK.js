// 1. Fixed Sliding Window Problems

// Maximum Sum Subarray of Size K

function maxSumSubarray(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
  
    // Calculate the sum of the first k elements
    for (let i = 0; i < k; i++) {
      windowSum += arr[i];
    }
  
    maxSum = windowSum;
  
    // Slide the window from start to end
    for (let i = k; i < arr.length; i++) {
      windowSum += arr[i] - arr[i - k];
      maxSum = Math.max(maxSum, windowSum);
    }
  
    return maxSum;
  }
  
  // Example usage
  console.log(maxSumSubarray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // Output: 21