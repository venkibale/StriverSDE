function longestSubstringWithKUniqueChars(str, k) {
    let start = 0;
    let maxLength = 0;
    let charCount = new Map(); // Hash map to store the frequency of characters
  
    for (let end = 0; end < str.length; end++) {
      // Add the current character to the window and update its count
      const endChar = str[end];
      charCount.set(endChar, (charCount.get(endChar) || 0) + 1);
  
      // Shrink the window if the number of unique characters exceeds `k`
      while (charCount.size > k) {
        const startChar = str[start];
        charCount.set(startChar, charCount.get(startChar) - 1);
        
        // Remove the character count from the map if it drops to 0
        if (charCount.get(startChar) === 0) {
          charCount.delete(startChar);
        }
  
        start++; // Shrink the window
      }
  
      // Update the maximum length if we have exactly `k` unique characters
      if (charCount.size === k) {
        maxLength = Math.max(maxLength, end - start + 1);
      }
    }
  
    return maxLength;
  }

// let str = "araaci";
// let k = 2;
// console.log(longestSubstringWithKUniqueChars(str, k)); // Output: 4 (substring is "araa")

// str = "cbbebi";
// k = 3;
// console.log(longestSubstringWithKUniqueChars(str, k)); // Output: 5 (substring is "cbbeb" or "bbebi")
