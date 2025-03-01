function getPermutation(n, k) {
    // Step 1: Precompute factorials
    const factorials = [1];
    for (let i = 1; i <= n; i++) {
        factorials[i] = factorials[i - 1] * i;
    }
    
    // Step 2: Create a list of numbers to pick from
    let numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    }
    
    // Step 3: Adjust k to 0-based index
    k--; 
    
    let result = '';
    
    // Step 4: Build the Kth permutation
    for (let i = 1; i <= n; i++) {
        const index = Math.floor(k / factorials[n - i]);
        result += numbers[index];
        numbers.splice(index, 1);  // Remove the used number
        k %= factorials[n - i];  // Update k to find the next part of the permutation
    }
    
    return result;
}

// Example usage:
console.log(getPermutation(3, 3)); // Output: "213"
