function smallestWindow(s, t) {
    if (s.length < t.length) return ""; // Impossible case

    const charCountT = {};
    for (const char of t) {
        charCountT[char] = (charCountT[char] || 0) + 1;
    }

    let start = 0, minLength = Infinity, minStart = 0;
    let matchCount = 0; // To track how many characters match
    const charCountWindow = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        charCountWindow[char] = (charCountWindow[char] || 0) + 1;

        // If the current character matches one from T
        if (charCountT[char] && charCountWindow[char] <= charCountT[char]) {
            matchCount++;
        }

        // Shrink the window if all characters are matched
        while (matchCount === t.length) {
            if (end - start + 1 < minLength) {
                minLength = end - start + 1;
                minStart = start;
            }

            const startChar = s[start];
            charCountWindow[startChar]--;
            if (charCountT[startChar] && charCountWindow[startChar] < charCountT[startChar]) {
                matchCount--;
            }
            start++;
        }
    }

    return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength);
}

// Example usage
const s = "ADOBECODEBANC";
const t = "ABC";
console.log(smallestWindow(s, t)); // Output: "BANC"
