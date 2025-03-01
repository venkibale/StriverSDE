function coinChange(coins, amount) {
    const memo = new Array(amount + 1).fill(-1);

    function helper(amount) {
        // Base case: If the amount is 0, we need 0 coins
        if (amount === 0) return 0;
        
        // Base case: If the amount is negative, it's not possible to form this amount
        if (amount < 0) return Infinity;

        if (memo[amount] !== -1) return memo[amount];

        // Try all possible coins and calculate the minimum number of coins needed
        let minCoins = Infinity;
        for (let coin of coins) {
            let result = helper(amount - coin);  // Recurse with reduced amount
            if (result !== Infinity) {
                minCoins = Math.min(minCoins, result + 1);  // Add 1 for the current coin
            }
        }
    
        memo[amount] = minCoins;
        return memo[amount];
    }

    let result = helper(amount);
    return result === Infinity ? -1 : result;  // If no solution, return -1
}

let coins = [1, 2, 5];
let amount = 11;
console.log(coinChange(coins, amount));  // Output: 3 (because 5 + 5 + 1 = 11)
// O(2 ^n)
// 



//Optimized


function coinChange(coins, amount) {
    // Initialize the dp array with Infinity (a large number)
    // dp[i] will store the minimum coins required to make amount i
    const dp = new Array(amount + 1).fill(Infinity);
    
    // Base case: to make 0 amount, we need 0 coins
    dp[0] = 0;
  
    // Loop through all possible amounts from 1 to 'amount'
    for (let i = 1; i <= amount; i++) {
      // Try all coins for each amount
      for (let coin of coins) {
        if (i - coin >= 0) {
          // Take the minimum of the current value and dp[i - coin] + 1 (since we added one coin)
          dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
      }
    }
  
    // If dp[amount] is still Infinity, it's not possible to form the amount
    return dp[amount] === Infinity ? -1 : dp[amount];
  }
  
  // Example usage
  const coins1 = [1, 2, 5];
  const amount1 = 11;
  console.log(coinChange(coins, amount)); // Output: 3 (5 + 5 + 1)
  