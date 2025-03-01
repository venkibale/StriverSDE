function numRollsToTargetRecursive(n, k, target) {
    const MOD = 1e9 + 7;

    // Memoization table
    const memo = new Map();

    // Recursive function
    function countWays(dice, remainingTarget) {
        // Base cases
        if (dice === 0 && remainingTarget === 0) return 1; // One valid way
        if (dice === 0 || remainingTarget < 0) return 0; // No valid way

        // Check if already computed
        const key = `${dice}-${remainingTarget}`;
        if (memo.has(key)) return memo.get(key);

        let ways = 0;

        // Try all possible outcomes for the current dice
        for (let face = 1; face <= k; face++) {
            ways = (ways + countWays(dice - 1, remainingTarget - face)) % MOD;
        }

        // Store result in memo and return
        memo.set(key, ways);
        return ways;
    }

    // Start recursion
    return countWays(n, target);
}

// O(n⋅target⋅k)


// Optimized

function numRollsToTarget(n, k, target) {
    const MOD = 1e9 + 7;

    // Create a DP table
    const dp = new Array(n + 1).fill(0).map(() => new Array(target + 1).fill(0));

    // Base case
    dp[0][0] = 1;

    // Fill the DP table
    for (let dice = 1; dice <= n; dice++) {
        for (let sum = 0; sum <= target; sum++) {
            dp[dice][sum] = 0; // Reset current cell
            for (let face = 1; face <= k; face++) {
                if (sum - face >= 0) {
                    dp[dice][sum] = (dp[dice][sum] + dp[dice - 1][sum - face]) % MOD;
                }
            }
        }
    }

    // Return the result
    return dp[n][target];
}

// Example usage
const n = 2; // Number of dice
const k = 6; // Number of faces on each die
const target = 7; // Target sum
console.log(numRollsToTarget(n, k, target)); // Output: 6


// TC: O(n⋅target⋅k)
// SC: O(n⋅target)

// Space optimized

var numRollsToTarget = function(n, k, target) {
    const MOD = 1e9 + 7;
        const dp = Array(target + 1).fill(0);
        dp[0] = 1;

        for (let dice = 0; dice < n; dice++) {
            for (let t = target; t >= 0; t--) {
                const ways = dp[t];
                dp[t] = 0;
                if (ways > 0) {
                    for (let val = 1; val <= Math.min(k, target - t); val++) {
                        dp[t + val] = (dp[t + val] + ways) % MOD;
                    }
                }
            }
        }

        return dp[target];
};