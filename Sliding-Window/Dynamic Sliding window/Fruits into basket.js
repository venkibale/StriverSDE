// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// Example 1:

// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.
// Example 2:

// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].
// Example 3:

// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].
 



function totalFruit(fruits) {
    let start = 0;
    let maxLength = 0;
    let fruitCount = new Map(); // Map to store the frequency of each fruit type
  
    for (let end = 0; end < fruits.length; end++) {
      const fruit = fruits[end];
      fruitCount.set(fruit, (fruitCount.get(fruit) || 0) + 1);
  
      // Shrink the window if we have more than 2 distinct fruits
      while (fruitCount.size > 2) {
        const startFruit = fruits[start];
        fruitCount.set(startFruit, fruitCount.get(startFruit) - 1);
        
        // Remove the fruit from the map if its count drops to 0
        if (fruitCount.get(startFruit) === 0) {
          fruitCount.delete(startFruit);
        }
  
        start++; // Shrink the window
      }
  
      // Update the maximum length of the subarray with at most 2 distinct fruits
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    return maxLength;
  }

//   let fruits = [1, 2, 1];
// console.log(totalFruit(fruits)); // Output: 3 (we can collect all the fruits)

// fruits = [0, 1, 2, 2];
// console.log(totalFruit(fruits)); // Output: 3 (longest subarray with at most 2 types of fruits is [1, 2, 2])

// fruits = [1, 2, 3, 2, 2];
// console.log(totalFruit(fruits)); // Output: 4 (longest subarray is [2, 3, 2, 2])

// fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
// console.log(totalFruit(fruits)); // Output: 5 (longest subarray is [1, 2, 1, 1, 2])

  