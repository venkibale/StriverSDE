//example of using binary search to minimize a maximum value
function isFeasible(arr, n, m, mid) {
    let students = 1; // Start with one student
    let currentPages = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] > mid) return false; // A single book exceeds the limit

        if (currentPages + arr[i] > mid) {
            // Allocate to next student
            students++;
            currentPages = arr[i];

            // Too many students required
            if (students > m) return false;
        } else {
            currentPages += arr[i];
        }
    }

    return true;
}

function allocateMinimumPages(arr, n, m) {
    if (m > n) return -1; // More students than books

    let low = Math.max(...arr); // Maximum pages in a single book
    let high = arr.reduce((a, b) => a + b, 0); // Total pages
    let result = high; // example of using binary search to minimize a maximum value

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (isFeasible(arr, n, m, mid)) {
            result = mid; // Update the result
            high = mid - 1; // Try for a smaller maximum
        } else {
            low = mid + 1; // Increase the allowed maximum
        }
    }

    return result;
}

// Example Usage:
let arr = [12, 34, 67, 90];
let n = arr.length;
let m = 2; // Students
console.log("Minimum number of pages:", allocateMinimumPages(arr, n, m));


// Binary Search: 𝑂(log(sum(arr) - max(arr)))
// Feasibility Check: O(n) per iteration
// Total: O(n⋅log(sum(arr) - max(arr)))
