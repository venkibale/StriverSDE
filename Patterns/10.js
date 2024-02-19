// Input Format: N = 3
// Result: 
//   *  
//   **
//   ***  
//   **
//   *  

function printPattern(n) {
    for (let i =0; i<=n*2-1; i++) {
        let stars = i
        let temp = [];

        if (i > n) stars = 2*n-i;
        for (let j=0; j<stars; j++) {
            temp.push("*"); 
        }

        console.log(temp.join(''));
    }
}

printPattern(3)