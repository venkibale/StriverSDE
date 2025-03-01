function generateParentheses(n) {
    const result = [];

    function backtrack(openCount, closeCount, current) {
        // Base case: if the current string is complete
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // Add an opening parenthesis if we have not used all
        if (openCount < n) {
            backtrack(openCount + 1, closeCount, current + "(");
        }

        // Add a closing parenthesis if it doesn't unbalance
        if (closeCount < openCount) {
            backtrack(openCount, closeCount + 1, current + ")");
        }
    }

    backtrack(0, 0, "");
    return result;
}

// Example Usage
console.log(generateParentheses(3));
// Output: ['((()))', '(()())', '(())()', '()(())', '()()()']
