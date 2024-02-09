// Example 1:
// Input: N = 3
// Output: 
// * * *
// * * *
// * * *

// function printPattern(n) {
//     for () {
//         for () {
            
//         }
//     }
// }

// printPattern(3)

function printPattern(n) {
    for (let i = 0; i<n; i++) {
        let temp = [];
        for (let j =0; j<n; j++) {
            temp.push('*');
        }
        console.log(temp.join(''));
    }
}

printPattern(5)

