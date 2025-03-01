function countKDistinctSubstrings(s, k) {
    if (s.length < k) return 0;

    let charCount = new Map(); // To store frequency of characters
    let start = 0;
    let result = 0;

    for (let end = 0; end < s.length; end++) {
        // Add the current character to the map
        charCount.set(s[end], (charCount.get(s[end]) || 0) + 1);

        // If the window size exceeds k, shrink it from the left
        if (end - start + 1 > k) {
            charCount.set(s[start], charCount.get(s[start]) - 1);
            if (charCount.get(s[start]) === 0) {
                charCount.delete(s[start]);
            }
            start++;
        }

        // If the window size is k and has exactly k distinct characters, count it
        if (end - start + 1 === k && charCount.size === k) {
            result++;
        }
    }

    return result;
}

// Example usage
const s = "abcabc";
const k = 3;
console.log(countKDistinctSubstrings(s, k)); // Output: 4 (Substrings: "abc", "bca", "cab", "abc")
