function phoneCombinations(digits) {
    if (!digits) return []; // Return empty array for empty input

    // Mapping of digits to corresponding letters
    const phoneMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    const result = [];

    function backtrack(index, path) {
        // Base case: if the path is complete, add it to the result
        if (index === digits.length) {
            result.push(path.join('')); // Join the path and add to result
            return;
        }

        // Get the letters corresponding to the current digit
        const letters = phoneMap[digits[index]];
        for (const letter of letters) {
            path.push(letter); // Choose the letter
            backtrack(index + 1, path); // Explore the next digit
            path.pop(); // Backtrack: Remove the letter
        }
    }

    backtrack(0, []);
    return result;
}

// Example Usage
console.log(phoneCombinations("23"));
// Output: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
