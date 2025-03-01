/**
 * console.log(calculate("3+2*2")); // Output: 7
 * console.log(calculate(" 3/2 ")); // Output: 1
 * console.log(calculate(" 3+5 / 2 ")); // Output: 5
 */



/**
 * 
 * @param {*} s 
 * @returns 
 */
function calculate(s) {
    let stack = [];
    let currentNumber = 0;
    let operation = '+';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (!isNaN(char) && char !== ' ') {
            currentNumber = currentNumber * 10 + parseInt(char); // "12+3*2": This is to handle when we have multiple digit like '12'
        }

        if (isNaN(char) || i === s.length - 1) {
            if (char === ' ' && i !== s.length - 1) continue; // skips the execution if there is any space in the intermediate

            if (operation === '+') {
                stack.push(currentNumber);
            } else if (operation === '-') {
                stack.push(-currentNumber);
            } else if (operation === '*') {
                stack.push(stack.pop() * currentNumber);
            } else if (operation === '/') {
                stack.push(Math.trunc(stack.pop() / currentNumber));
            }

            operation = char;
            currentNumber = 0;
        }
    }

    return stack.reduce((acc, num) => acc + num, 0); // Finally sum the values, we perform operation on *, /
}