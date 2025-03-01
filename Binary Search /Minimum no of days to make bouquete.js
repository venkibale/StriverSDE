function minDays(bloomDay, M, K) {
    const n = bloomDay.length;

    // Check if it is even possible to make M bouquets:
    if (M * K > n) return -1;

    // Helper function to check feasibility:
    function canMakeBouquets(days) {
        let bouquets = 0;
        let flowers = 0;

        for (let bloom of bloomDay) {
            if (bloom <= days) {
                flowers++; // Flower bloomed
                if (flowers === K) {
                    bouquets++; // Make a bouquet
                    flowers = 0; // Reset flower count
                }
            } else {
                flowers = 0; // Reset count if flower not bloomed
            }

            if (bouquets >= M) return true;
        }

        return false;
    }

    // Binary search on the number of days:
    let low = Math.min(...bloomDay);
    let high = Math.max(...bloomDay);
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (canMakeBouquets(mid)) {
            result = mid; // Mid is feasible
            high = mid - 1; // Try fewer days
        } else {
            low = mid + 1; // Try more days
        }
    }

    return result;
}

// Example usage:
let bloomDay = [1, 10, 3, 10, 2];
let M = 3;
let K = 1;
console.log("Minimum days to make M bouquets:", minDays(bloomDay, M, K));
