// Input Format: N = 3
// Result: 
// 1    1
// 12  21
// 123321
function printPattern(n) {
    let spaces = (2*n)-2
    console.log(spaces)
    for (let i =1; i<=n; i++) {
        let temp = [];
        
        for (let j=1; j<=i; j++) {
            temp.push(j);
        }

        for (let j=1; j<=spaces; j++) {
            temp.push(" ");
        }


        for (let j=i; j>=1; j--) {
            temp.push(j); 
        }
        spaces-=2
        console.log(temp.join(''));
    }
}

printPattern(5)