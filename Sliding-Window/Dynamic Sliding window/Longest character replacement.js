// The Longest Repeating Character Replacement problem is a classic sliding window problem where you need to determine the longest substring you can form by replacing at most 
// 𝐾
// K characters in a string so that all characters in the substring are the same.

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
function characterReplacement(s, k) {
    let start = 0, maxFreq = 0, maxLength = 0;
    const freq = {};

    for (let end = 0; end < s.length; end++) {
        // Add the current character to the frequency map
        const char = s[end];
        freq[char] = (freq[char] || 0) + 1;

        // Update the maximum frequency of any character in the current window
        maxFreq = Math.max(maxFreq, freq[char]);

        // Check if the window is valid (total characters - most frequent character <= k)
        while ((end - start + 1) - maxFreq > k) {
            const startChar = s[start];
            freq[startChar]--;
            start++;
        }

        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
