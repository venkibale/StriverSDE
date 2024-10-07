function moveZerosToEnd(arr) {
    let j = -1 ;
    for(let i =0; i< arr.length; i++) {
        if( arr[i]=== 0) {
            j = i;
            break;
        }
    }
    if (j === -1) return arr;

    for(let i= j+1; i< arr.length; i++) {
        if(arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            j++;
        }
    }
    return arr;
}

let arr = [1, 0, 2, 3, 2, 0, 0, 4, 5, 1];
console.log(moveZerosToEnd(arr))