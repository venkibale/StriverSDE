function permuteStringByCase(input) {
    const results = [];

    function backtrack(index, current) {
        // Base case: if we've processed all characters
        if (index === input.length) {
            results.push(current);
            return;
        }

        const char = input[index];

        // If the character is a letter, branch into uppercase and lowercase
        if (char >= "a" && char <= "z" || char >= "A" && char <= "Z") {
            backtrack(index + 1, current + char.toLowerCase());
            backtrack(index + 1, current + char.toUpperCase());
        } else {
            // If the character is not a letter, keep it as is
            backtrack(index + 1, current + char);
        }
    }

    backtrack(0, "");
    return results;
}

// Example Usage
const input = "a1B";
console.log(permuteStringByCase(input));
// Output: ["a1b", "a1B", "A1b", "A1B"]
