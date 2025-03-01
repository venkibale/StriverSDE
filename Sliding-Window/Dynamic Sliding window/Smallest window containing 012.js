function smallestWindowContaining012(arr) {
    const countMap = { 0: 0, 1: 0, 2: 0 }; // To count occurrences of 0, 1, 2
    let start = 0;
    let minLength = Infinity;

    for (let end = 0; end < arr.length; end++) {
        // Include the current element in the window
        if (arr[end] in countMap) {
            countMap[arr[end]]++;
        }

        // Check if the current window contains 0, 1, and 2
        while (countMap[0] > 0 && countMap[1] > 0 && countMap[2] > 0) {
            // Update the minimum length
            minLength = Math.min(minLength, end - start + 1);

            // Shrink the window from the left
            if (arr[start] in countMap) {
                countMap[arr[start]]--;
            }
            start++;
        }
    }

    return minLength === Infinity ? -1 : minLength;
}

// Example usage
const arr = [0, 1, 2, 1, 2, 0, 0, 1];
console.log(smallestWindowContaining012(arr)); // Output: 3 (e.g., [0, 1, 2])
