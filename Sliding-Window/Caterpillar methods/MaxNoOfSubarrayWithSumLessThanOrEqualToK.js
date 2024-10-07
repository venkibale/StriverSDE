function longestSubarrayWithSumAtMostK(arr, k) {
    let maxLength = 0;
    let windowSum = 0;
    let start = 0;
  
    for (let end = 0; end < arr.length; end++) {
      windowSum += arr[end];
  
      // Shrink the window if the sum exceeds `k`
      while (windowSum > k) {
        windowSum -= arr[start];
        start++;
      }
  
      // Update the maximum length of the subarray
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }

//   let arr = [1, 2, 3, 4, 5];
// let k = 7;
// console.log(longestSubarrayWithSumAtMostK(arr, k)); // Output: 2 (subarray is [3, 4])

// arr = [2, 1, 5, 1, 3, 2];
// k = 7;
// console.log(longestSubarrayWithSumAtMostK(arr, k)); // Output: 4 (subarray is [2, 1, 5, 1])

// arr = [3, 1, 2, 1];
// k = 5;
// console.log(longestSubarrayWithSumAtMostK(arr, k)); // Output: 3 (subarray is [3, 1, 1])

  