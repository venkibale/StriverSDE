function coinChange2(coins, amount) {
    // Create a memoization table
    const memo = Array(coins.length).fill(null).map(() => Array(amount + 1).fill(-1));
  
    function helper(index, remaining) {
      // Base case: If remaining amount is 0, there's 1 way to achieve it (by not using any coins)
      if (remaining === 0) return 1;
  
      // Base case: If no coins are left or the amount becomes negative, no solution exists
      if (index === coins.length || remaining < 0) return 0;
  
      // Check memo table for previously calculated results
      if (memo[index][remaining] !== -1) return memo[index][remaining];
  
      // Choice 1: Include the current coin and reduce the remaining amount
      const include = helper(index, remaining - coins[index]);
  
      // Choice 2: Exclude the current coin and move to the next coin
      const exclude = helper(index + 1, remaining);
  
      // Store the result in the memo table and return it
      return (memo[index][remaining] = include + exclude);
    }
  
    return helper(0, amount);
  }
  
  // Example Usage
  const coins = [1, 2, 5];
  const amount = 5;
  
  console.log(coinChange2(coins, amount)); // Output: 4

  
  //Optimized


  function coinChange2(coins, amount) {
    // Create a DP array to store the number of ways to make each amount
    const dp = new Array(amount + 1).fill(0);
  
    // Base case: There's 1 way to make amount 0 (by using no coins)
    dp[0] = 1;
  
    // Loop through each coin
    for (const coin of coins) {
      // Update DP array for each amount starting from the current coin value
      for (let target = coin; target <= amount; target++) {
        dp[target] += dp[target - coin];
      }
    }
  
    // The result is the number of ways to make the target amount
    return dp[amount];
  }
  
  // Example Usage
  const coins1 = [1, 2, 5];
  const amount1 = 5;
  
  console.log(coinChange2(coins, amount)); // Output: 4
  