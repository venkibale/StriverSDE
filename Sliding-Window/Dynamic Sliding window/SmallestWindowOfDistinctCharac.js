// Example usage:
const str = "aabcbcdbca";
console.log(smallestWindowDistinctChars(str));  // Output: "dbca"


function smallestWindowDistinctChars(str) {
    const n = str.length;
    
    // Set of all distinct characters in the input string
    const distinctChars = new Set(str);
    const requiredDistinctCount = distinctChars.size;
    
    // Frequency map to track characters in the current window
    const freqMap = new Map();
    
    let minWindowLength = Infinity;
    let windowStart = 0;
    let matchedDistinctCount = 0;
    let startIdxOfMinWindow = -1;
    
    for (let windowEnd = 0; windowEnd < n; windowEnd++) {
      const char = str[windowEnd];
      
      // Add the character to the frequency map
      freqMap.set(char, (freqMap.get(char) || 0) + 1);
      
      // If the character's frequency becomes 1, it means we have one more distinct character in the window
      if (freqMap.get(char) === 1) {
        matchedDistinctCount++;
      }
  
      // When all distinct characters are matched, try to shrink the window
      while (matchedDistinctCount === requiredDistinctCount) {
        const windowLength = windowEnd - windowStart + 1;
        
        // Update the minimum window length if a smaller one is found
        if (windowLength < minWindowLength) {
          minWindowLength = windowLength;
          startIdxOfMinWindow = windowStart;
        }
        
        // Try to remove the character at `windowStart` and shrink the window
        const startChar = str[windowStart];
        freqMap.set(startChar, freqMap.get(startChar) - 1);
        
        // If the character's frequency becomes 0, it means we lost a distinct character
        if (freqMap.get(startChar) === 0) {
          matchedDistinctCount--;
        }
        
        windowStart++;
      }
    }
    
    // Return the smallest window or empty string if no window found
    return minWindowLength === Infinity 
      ? "" 
      : str.substring(startIdxOfMinWindow, startIdxOfMinWindow + minWindowLength);
  }

  