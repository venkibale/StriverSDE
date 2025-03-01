function countDistinctElementsInWindow(arr, k) {
    const n = arr.length;
    
    if (k > n) {
      console.log("Window size is larger than the array length.");
      return;
    }
    
    const countMap = {};  // To store the frequency of elements
    const result = [];    // To store the distinct count for each window
    
    // Initialize the first window
    for (let i = 0; i < k; i++) {
      countMap[arr[i]] = (countMap[arr[i]] || 0) + 1;
    }
    
    // Add the distinct count of the first window to the result
    result.push(Object.keys(countMap).length);
    
    // Now, slide the window from index k to n-1
    for (let i = k; i < n; i++) {
      // Remove the element going out of the window (arr[i - k])
      const outElement = arr[i - k];
      countMap[outElement]--;
      if (countMap[outElement] === 0) {
        delete countMap[outElement];
      }
      
      // Add the new element coming into the window (arr[i])
      const inElement = arr[i];
      countMap[inElement] = (countMap[inElement] || 0) + 1;
      
      // Add the current distinct count to the result
      result.push(Object.keys(countMap).length);
    }
    
    return result;
  }
  
  // Test Example
  const arr = [1, 2, 1, 3, 4, 2, 3];
  const k = 4;
  console.log(countDistinctElementsInWindow(arr, k));  // Output: [3, 4, 4, 3]
  