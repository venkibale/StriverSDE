function uniquePermutations(s) {
    const result = [];
    s = s.split('').sort(); // Sort the string to handle duplicates

    function backtrack(start) {
        if (start === s.length) {
            result.push(s.join(''));
            return;
        }
        for (let i = start; i < s.length; i++) {
            // Skip duplicates
            if (i > start && s[i] === s[start]) continue;

            // Swap characters
            [s[start], s[i]] = [s[i], s[start]]; // Swap
            backtrack(start + 1);
            // Backtrack: Undo the swap
            [s[start], s[i]] = [s[i], s[start]];
        }
    }

    backtrack(0);
    return result;
}

// Example Usage
console.log(uniquePermutations("aab"));
// Output: ['aab', 'aba', 'baa']
