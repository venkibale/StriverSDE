  // Maximise the number of toys that can be purchased with amount K

//   Given an array consisting of the cost of toys. Given an integer K depicting the amount of money available to purchase toys. Write a program to find the maximum number of toys one can buy with the amount K. 

//   Note: One can buy only 1 quantity of a particular toy.
  
//   Examples:  
  
//   Input:  N = 10, K =  50,  cost = { 1, 12, 5, 111, 200, 1000, 10, 9, 12, 15 }
//   Output: 6
//   Explanation: Toys with amount 1, 5, 9, 10, 12, and 12  can be purchased resulting in a total amount of 49. Hence, maximum number of toys is 6.
  
  
  
  
//   Input: N = 7, K = 50,  cost = { 1, 12, 5, 111, 200, 1000, 10 }
//   Output: 4 

  // Javascript Program to maximize the
    // number of toys with K amount
    
    // This functions returns 
    // the required number of toys
    function maximum_toys(cost, N, K)
    {
        let count = 0, sum = 0;

        // sort the cost array
        cost.sort(function(a, b){return a - b});
        for (let i = 0; i < N; i++) 
        {

            // Check if we can buy ith toy or not 
            if (sum +cost[i] <= K) 
            {
                sum = sum + cost[i];
                // Increment count
                count++;
            }
        }
        return count;
    }
    
    let K = 50;
    let cost = [1, 12, 5, 111, 200, 1000, 10, 9, 12, 15];
    let N = cost.length;

    console.log(maximum_toys(cost, N, K));