function longestSubstringWithoutRepeatingChars(s) {
    const n = s.length;
    let start = 0;  // Start of the sliding window
    let maxLength = 0;  // Maximum length of substring without repeating characters
    const charIndexMap = new Map();  // Hash map to store the last occurrence of each character

    for (let end = 0; end < n; end++) {
        const char = s[end];

        // If the character is already in the window, move the start pointer to its next position
        if (charIndexMap.has(char)) {
            // Ensure the start pointer only moves forward
            start = Math.max(start, charIndexMap.get(char) + 1);
        }

        // Update the last occurrence of the character
        charIndexMap.set(char, end);

        // Calculate the maximum length of the substring
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
const s = "abcabcbb";
console.log(longestSubstringWithoutRepeatingChars(s));  // Output: 3 (substring "abc")
