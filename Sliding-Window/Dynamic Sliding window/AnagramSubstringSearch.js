// Anagram Substring Search (Or Search for all permutations)

function findAnagramIndices(s, p) {
    const result = [];
    const sLen = s.length, pLen = p.length;

    if (pLen > sLen) return result;

    // Frequency array to count characters in the pattern and the sliding window in `s`
    const patternFreq = new Array(26).fill(0);  // Assuming lowercase English letters
    const windowFreq = new Array(26).fill(0);

    // Helper function to convert a character to an index (0 to 25)
    const charToIndex = (char) => char.charCodeAt(0) - 'a'.charCodeAt(0);

    // Populate the frequency for the pattern `p`
    for (let i = 0; i < pLen; i++) {
        patternFreq[charToIndex(p[i])]++;
        windowFreq[charToIndex(s[i])]++;
    }

    // Function to check if two frequency arrays are equal
    const isEqualFreq = (a, b) => a.every((val, index) => val === b[index]);

    // Check the first window
    if (isEqualFreq(patternFreq, windowFreq)) {
        result.push(0);  // First window matches
    }

    // Slide the window over string `s`
    for (let i = pLen; i < sLen; i++) {
        // Add the new character to the window
        windowFreq[charToIndex(s[i])]++;

        // Remove the first character of the previous window
        windowFreq[charToIndex(s[i - pLen])]--;

        // Check if the new window matches the pattern frequency
        if (isEqualFreq(patternFreq, windowFreq)) {
            result.push(i - pLen + 1);  // Add the start index of the current window
        }
    }

    return result;
}

// Example usage:
const s = "cbaebabacd";
const p = "abc";
console.log(findAnagramIndices(s, p));  // Output: [0, 6]
