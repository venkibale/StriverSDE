// Smallest Subarray with a Given Sum

function minSubarrayLen(arr, target) {
    let minLength = Infinity;
    let windowSum = 0;
    let start = 0;
  
    for (let end = 0; end < arr.length; end++) {
      windowSum += arr[end];
  
      while (windowSum >= target) {
        minLength = Math.min(minLength, end - start + 1);
        windowSum -= arr[start];
        start++;
      }
    }
  
    return minLength === Infinity ? 0 : minLength;
  }
  
  // Example usage
  console.log(minSubarrayLen([2, 3, 1, 2, 4, 3], 7)); // Output: 2