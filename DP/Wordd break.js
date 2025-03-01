var wordBreak = function(s, wordDict) {
    // Create a DP array of size s.length + 1, initialized to false
    let dp = Array(s.length + 1).fill(false);
    dp[0] = true; // Base case: empty string can be segmented

    // Convert wordDict to a set for faster lookup
    let wordSet = new Set(wordDict);

    // Iterate through each character of the string s
    for (let i = 1; i <= s.length; i++) {
        // Check each substring ending at i
        for (let j = 0; j < i; j++) {
            // If dp[j] is true and the substring s[j:i] is in the dictionary
            if (dp[j] && wordSet.has(s.slice(j, i))) {
                dp[i] = true;
                break; // No need to check further once we find a valid partition
            }
        }
    }

    // Return the result for the full string s
    return dp[s.length];
};

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false