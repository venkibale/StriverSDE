// Input Format: N = 3
// Result: 
// 1
// 2 3
// 4 5 6
function printPattern(n) {
    let num = 1;
    for (let i =1; i<=n; i++) {
        let temp = [];
        for (let j=1; j<=i; j++) {
            
            temp.push(num);
            num +=1
        }
        console.log(temp.join(''));
    }
}

printPattern(5)