
function solve(ind, height, dp) {
    if (ind === 0) return 0;
    if (dp[ind] !== -1) return dp[ind];
    let jumpTwo = Infinity;
    let jumpOne = solve(ind - 1, height, dp) + Math.abs(height[ind] - height[ind - 1]);
    if (ind > 1)
      jumpTwo = solve(ind - 2, height, dp) + Math.abs(height[ind] - height[ind - 2]);
  
    return (dp[ind] = Math.min(jumpOne, jumpTwo));
  }
  
  function main() {
    const height = [30, 10, 60, 10, 60, 50];
    const n = height.length;
    const dp = new Array(n).fill(-1);
    console.log(solve(n - 1, height, dp));
  }
  
  main();
  

  //Optimized



function main() {
    const height = [30, 10, 60, 10, 60, 50];
    const n = height.length;
    let prev = 0;
    let prev2 = 0;
  
    for (let i = 1; i < n; i++) {
      let jumpTwo = Infinity;
      let jumpOne = prev + Math.abs(height[i] - height[i - 1]);
      if (i > 1)
        jumpTwo = prev2 + Math.abs(height[i] - height[i - 2]);
  
      let cur_i = Math.min(jumpOne, jumpTwo);
      prev2 = prev;
      prev = cur_i;
    }
  
    console.log(prev);
  }
  
  main();
  
  
  