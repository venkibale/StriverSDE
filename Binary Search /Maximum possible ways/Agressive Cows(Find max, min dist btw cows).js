function canPlaceCows(stalls, n, c, dist) {
    let count = 1; // Place the first cow at the first stall.
    let lastPos = stalls[0]; // Position of the last placed cow.

    for (let i = 1; i < n; i++) {
        if (stalls[i] - lastPos >= dist) {
            count++; // Place another cow.
            lastPos = stalls[i]; // Update the position of the last placed cow.
            if (count === c) return true; // All cows are placed.
        }
    }

    return false; // Not possible to place all cows with at least `dist`.
}

function aggressiveCows(stalls, n, c) {
    stalls.sort((a, b) => a - b); // Sort the stalls in ascending order.

    let low = 1, high = stalls[n - 1] - stalls[0]; // Distance range.
    let result = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (canPlaceCows(stalls, n, c, mid)) {
            result = mid; // Update result to the feasible mid.
            low = mid + 1; // Try for a larger distance.
        } else {
            high = mid - 1; // Try for a smaller distance.
        }
    }

    return result;
}

// Example Usage:
let stalls = [1, 2, 8, 4, 9];
let n = stalls.length;
let c = 3; // Number of cows.
let maxMinDist = aggressiveCows(stalls, n, c);
console.log("Maximum minimum distance:", maxMinDist);
