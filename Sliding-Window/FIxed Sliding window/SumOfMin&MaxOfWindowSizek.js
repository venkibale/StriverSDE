function sumOfMinAndMaxSubarrays(arr, k) {
    let sum = 0;
    
    // Deques to store indices of minimum and maximum elements
    let minDeque = [];
    let maxDeque = [];
  
    for (let i = 0; i < arr.length; i++) {
      // Remove elements out of the current window from both deques
      if (minDeque.length > 0 && minDeque[0] <= i - k) {
        minDeque.shift();
      }
      if (maxDeque.length > 0 && maxDeque[0] <= i - k) {
        maxDeque.shift();
      }
  
      // Maintain elements in decreasing order in the minDeque
      while (minDeque.length > 0 && arr[minDeque[minDeque.length - 1]] >= arr[i]) {
        minDeque.pop();
      }
      // Maintain elements in increasing order in the maxDeque
      while (maxDeque.length > 0 && arr[maxDeque[maxDeque.length - 1]] <= arr[i]) {
        maxDeque.pop();
      }
  
      // Add current element's index to both deques
      minDeque.push(i);
      maxDeque.push(i);
  
      // When we have the first window (i >= k - 1), add the min and max to the result
      if (i >= k - 1) {
        sum += arr[minDeque[0]] + arr[maxDeque[0]];
      }
    }
  
    return sum;
  }
  
  // Example usage:
  const arr = [2, 5, -1, 7, -3, -1, -2];
  const k = 3;
  console.log(sumOfMinAndMaxSubarrays(arr, k));