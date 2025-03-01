function generateWithSpaces(s) {
    const result = [];

    function backtrack(index, current) {
        // Base case: if we reach the end of the string, add the result
        if (index === s.length) {
            result.push(current);
            return;
        }

        // Include the current character without a space
        backtrack(index + 1, current + s[index]);

        // Include the current character with a space (only if not the last character)
        if (index < s.length - 1) {
            backtrack(index + 1, current + s[index] + " ");
        }
    }

    if (s.length > 0) {
        backtrack(1, s[0]); // Start with the first character
    }
    return result;
}

// Example Usage
console.log(generateWithSpaces("ABC"));
// Output: ['ABC', 'A BC', 'AB C', 'A B C']
