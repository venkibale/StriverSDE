function maxOfMins(arr) {
    const n = arr.length;
    const left = Array(n).fill(-1); // Previous smaller element index
    const right = Array(n).fill(n); // Next smaller element index

    const stack = [];

    // Compute previous smaller for each element
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            left[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    // Clear the stack for the next calculation
    stack.length = 0;

    // Compute next smaller for each element
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            right[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    // Result array to store the maximum of minimums for every window size
    const result = Array(n + 1).fill(0);

    // Populate result for each window size using the range of influence
    for (let i = 0; i < n; i++) {
        const windowSize = right[i] - left[i] - 1; // Size of window where arr[i] is the minimum
        result[windowSize] = Math.max(result[windowSize], arr[i]);
    }

    // Fill the result array for smaller window sizes
    for (let i = n - 1; i >= 1; i--) {
        result[i] = Math.max(result[i], result[i + 1]);
    }

    // Ignore result[0] as there is no window of size 0
    return result.slice(1);
}

// Example usage
const arr = [10, 20, 30, 50, 10, 70, 30];
console.log(maxOfMins(arr)); // Output: [70, 30, 20, 10, 10, 10, 10]
