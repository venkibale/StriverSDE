
function moveZeros(n, a) {
    let j = -1;
    
    // Place the pointer j
    for (let i = 0; i < n; i++) {
        if (a[i] === 0) {
            j = i;
            break;
        }
    }
    
    // No non-zero elements
    if (j === -1) return a;
    
    // Move the pointers i and j and swap accordingly
    for (let i = j + 1; i < n; i++) {
        if (a[i] !== 0) {
            [a[i], a[j]] = [a[j], a[i]]; // logic is that j always points to zero.
            j++;
        }
    }
    
    return a;
}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
let n = 10;
let ans = moveZeros(n, arr);
console.log(ans.join(' '));


