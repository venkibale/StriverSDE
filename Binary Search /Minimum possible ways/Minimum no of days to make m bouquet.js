function minDaysToMakeBouquets(bloomDay, m, k) {
    const n = bloomDay.length;

    // Edge case: Not enough flowers
    if (m * k > n) return -1;

    // Helper function to check feasibility
    function canMakeBouquets(days) {
        let bouquets = 0;
        let flowers = 0;

        for (let bloom of bloomDay) {
            if (bloom <= days) {
                flowers++;
                if (flowers === k) {
                    bouquets++;
                    flowers = 0; // Reset flowers for the next bouquet
                }
            } else {
                flowers = 0; // Reset flowers if the current flower hasn't bloomed
            }
        }

        return bouquets >= m;
    }

    // Binary search on the range of days
    let low = Math.min(...bloomDay);
    let high = Math.max(...bloomDay);
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (canMakeBouquets(mid)) {
            result = mid; // Possible to make bouquets, try fewer days
            high = mid - 1;
        } else {
            low = mid + 1; // Not possible, try more days
        }
    }

    return result;
}

// Example usage
const bloomDay = [1, 10, 3, 10, 2];
const m = 3, k = 1;
console.log("Minimum days to make bouquets:", minDaysToMakeBouquets(bloomDay, m, k));


// O(n⋅log(maxDay−minDay))