// Maximum minimum excluded value

// To find the maximum MEX (Minimum Excluded Value) from all subarrays of length K in an array using the sliding window technique in JavaScript, we need to:


function findMaxMEX(arr, k) {
    const n = arr.length;
    const result = [];
    
    // Set to track elements in the current window
    const windowSet = new Set();
    
    // Initialize the first window
    for (let i = 0; i < k; i++) {
      windowSet.add(arr[i]);
    }
    
    // Function to calculate the MEX (Minimum Excluded Value)
    const calculateMEX = () => {
      let mex = 0;
      while (windowSet.has(mex)) {
        mex++;
      }
      return mex;
    };
    
    // Calculate MEX for the first window
    let maxMEX = calculateMEX();
    result.push(maxMEX);
    
    // Now slide the window from index k to n-1
    for (let i = k; i < n; i++) {
      // Remove the element going out of the window
      windowSet.delete(arr[i - k]);
      
      // Add the new element coming into the window
      windowSet.add(arr[i]);
      
      // Calculate the new MEX for the current window
      const currentMEX = calculateMEX();
      maxMEX = Math.max(maxMEX, currentMEX);
      
      // Store the MEX for each window
      result.push(currentMEX);
    }
    
    return maxMEX;  // Return the maximum MEX across all windows
  }
  
  // Test Example
  const arr = [0, 1, 2, 4, 3, 1, 0];
  const k = 3;
  console.log(findMaxMEX(arr, k));  // Output: 3
  