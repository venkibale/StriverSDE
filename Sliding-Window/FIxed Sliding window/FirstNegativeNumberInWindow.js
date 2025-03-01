// Fixed Sliding Window Problems

// First Negative Integer in Every Window of Size K

//Here i-k+1 is the first ele in the window

function firstNegativeInWindow(arr, k) {
    let result = [];
    let firstNegativeIndex = -1; // To keep track of the first negative number's index in the current window
  
    // Process the first window of size k
    for (let i = 0; i < k; i++) {
      if (arr[i] < 0 && firstNegativeIndex === -1) {
        firstNegativeIndex = i;
      }
    }
  
    // Store the first negative number for the first window
    if (firstNegativeIndex !== -1) {
      result.push(arr[firstNegativeIndex]);
    } else {
      result.push(0);
    }
  
    // Slide the window
    for (let i = k; i < arr.length; i++) {
      // Check if the first negative number is out of the window
      if (firstNegativeIndex !== -1 && firstNegativeIndex < i - k + 1) {
        firstNegativeIndex = -1;
      }
  
      // Find the next negative number in the current window
      if (arr[i] < 0 && firstNegativeIndex === -1) {
        firstNegativeIndex = i;
      }
  
      // Store the first negative number for the current window
      if (firstNegativeIndex !== -1) {
        result.push(arr[firstNegativeIndex]);
      } else {
        result.push(0); // No negative number in this window
      }
    }
  
    return result;
  }
  let arr = [12, -1, -7, 8, -15, 30, 16, 28];
  let k = 3;
  console.log(firstNegativeInWindow(arr, k)); // Output: [-1, -1, -7, -15, -15, 0]  