function minEatingSpeed(piles, H) {
    let low = 1; // Minimum possible speed
    let high = Math.max(...piles); // Maximum possible speed
    let result = high; // Store the minimum speed

    while (low <= high) {
        let mid = Math.floor((low + high) / 2); // Midpoint speed

        // Calculate total time required at speed `mid`
        let time = 0;
        for (let pile of piles) {
            time += Math.ceil(pile / mid);
        }

        if (time <= H) {
            // If `mid` is feasible, try smaller speeds
            result = mid;
            high = mid - 1;
        } else {
            // If `mid` is not feasible, try larger speeds
            low = mid + 1;
        }
    }

    return result; // Minimum speed
}

// Example usage:
let piles = [3, 6, 7, 11];
let H = 8;
console.log("Minimum speed Koko needs:", minEatingSpeed(piles, H));
