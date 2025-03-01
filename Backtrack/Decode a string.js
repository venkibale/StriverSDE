function decodeString(s) {
    const stack = [];
    let result = "";
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char >= "0" && char <= "9") {
            // Build the count number
            count = count * 10 + parseInt(char, 10);
        } else if (char === "[") {
            // Push the current result and count to the stack
            stack.push(result);
            stack.push(count);

            // Reset result and count for the inner section
            result = "";
            count = 0;
        } else if (char === "]") {
            // Pop the count and previous result from the stack
            const prevCount = stack.pop();
            const prevResult = stack.pop();

            // Append the repeated substring to the previous result
            result = prevResult + result.repeat(prevCount);
        } else {
            // Append regular character to the result
            result += char;
        }
    }

    return result;
}

// Example Usage
const encodedString = "3[a2[c]]";
console.log(decodeString(encodedString)); // Output: "accaccacc"


// Without stack

function decodeString(s) {
    let index = 0;

    function decode() {
        let result = "";
        let count = 0;

        while (index < s.length) {
            const char = s[index];

            if (char >= "0" && char <= "9") {
                // Build the multiplier number
                count = count * 10 + parseInt(char, 10);
                index++;
            } else if (char === "[") {
                // Skip '[' and decode the inner substring
                index++;
                const inner = decode();
                // Append repeated substring
                result += inner.repeat(count);
                count = 0; // Reset count
            } else if (char === "]") {
                // End of the current substring, return it
                index++;
                return result;
            } else {
                // Append regular character to result
                result += char;
                index++;
            }
        }

        return result;
    }

    return decode();
}

// Example Usage
const encodedString2 = "3[a2[c]]";
console.log(decodeString(encodedString)); // Output: "accaccacc"
