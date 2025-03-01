// Given an array arr[] of size n, the task is to find the length of the longest subarray with sum equal to 0.

// Examples:

// Input: arr[] = {15, -2, 2, -8, 1, 7, 10, 23}
// Output: 5
// Explanation: The longest subarray with sum equals to 0 is {-2, 2, -8, 1, 7}

function maxLen(arr)
{

    // Map to store the previous sums
    let presum = new Map();

    let sum = 0;
    let max_len = 0;

    // Traverse through the given array
    for (let i = 0; i < arr.length; i++) {

        // Add current element to sum
        sum += arr[i];

        // If the sum is 0, update max_len
        // To check for sum 0 which starts from index 0
        if (sum === 0) {
            max_len = i + 1;
        }

        // Check if this sum is seen before
        if (presum.has(sum)) {

            // If this sum is seen before, update max_len
            max_len
                = Math.max(max_len, i - presum.get(sum));
        }
        else {

            // If this sum is not seen before, add it to the
            // map
            presum.set(sum, i);
        }
    }

    return max_len;
}

const arr = [ 15, -2, 2, -8, 1, 7, 10, 23 ];