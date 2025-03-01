function shipWithinDays(weights, D) {
    const n = weights.length;

    // Helper function to check feasibility
    function canShip(capacity) {
        let days = 1;
        let currentWeight = 0;

        for (let weight of weights) {
            if (currentWeight + weight > capacity) {
                // Start a new day
                days++;
                currentWeight = weight;
                if (days > D) return false; // Exceeds allowed days
            } else {
                currentWeight += weight;
            }
        }

        return true; // Can ship within D days
    }

    // Binary search range
    let low = Math.max(...weights);
    let high = weights.reduce((a, b) => a + b, 0);

    let result = high; // Store the minimum capacity
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (canShip(mid)) {
            result = mid; // Feasible capacity
            high = mid - 1; // Try smaller capacity
        } else {
            low = mid + 1; // Increase capacity
        }
    }

    return result;
}

// Example usage
const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const D = 5;
console.log("Minimum ship capacity:", shipWithinDays(weights, D));

//Binary Search: O(log(sum(weights)−max(weights))), Feasibility: O(n)
// O(n⋅log(sum(weights)−max(weights)))