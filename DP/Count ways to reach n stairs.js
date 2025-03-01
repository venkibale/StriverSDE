function countWaysRecursive(n) {
    if (n === 0) return 1; // Base case: 1 way to stay at ground
    if (n < 0) return 0;   // No way to reach negative steps

    return countWaysRecursive(n - 1) + countWaysRecursive(n - 2) + countWaysRecursive(n - 3);
}

// Example Usage
const stairs = 4;
console.log(countWaysRecursive(stairs)); // Output: 7



//Memoization

function countWaysDP(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;
    //if (n === 2) return 2;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // Base case: 1 way to stay at ground
    dp[1] = 1; // 1 way to reach 1st stair
    // dp[2] = 2; // 2 ways to reach 2nd stair

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    return dp[n];
}

// Example Usage
const stairsDP = 4;
console.log(countWaysDP(stairsDP)); // Output: 7


//Space optimized 

function countWaysOptimized(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;
    if (n === 2) return 2;

    let a = 1; // dp[i-3]
    let b = 1; // dp[i-2]
    let c = 2; // dp[i-1]

    for (let i = 3; i <= n; i++) {
        const temp = a + b + c;
        a = b;
        b = c;
        c = temp;
    }

    return c;
}

// Example Usage
const stairsOptimized = 4;
console.log(countWaysOptimized(stairsOptimized)); // Output: 7
