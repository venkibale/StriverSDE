function minEatingSpeed(piles, h) {
    // Helper function to check if speed k is feasible
    function canEatAll(k) {
        let time = 0;
        for (let pile of piles) {
            time += Math.ceil(pile / k);
            if (time > h) return false; // Exceeds allowed hours
        }
        return true;
    }

    // Binary search range
    let low = 1;
    let high = Math.max(...piles);

    let result = high; // Store the minimum speed
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (canEatAll(mid)) {
            result = mid; // Feasible speed
            high = mid - 1; // Try smaller speed
        } else {
            low = mid + 1; // Increase speed
        }
    }

    return result;
}

// Example usage
const piles = [3, 6, 7, 11];
const h = 8;
console.log("Minimum eating speed:", minEatingSpeed(piles, h));


// O(log(max(piles))).