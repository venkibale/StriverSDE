function secondSmallest(arr) {
    if (arr.length < 2)
      return -1;
  
    let small = Infinity;
    let second_small = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < small) {
        second_small = small;
        small = arr[i];
      } else if (arr[i] < second_small && arr[i] !== small) {
        second_small = arr[i];
      }
    }
  
    return second_small;
  }
  

const arr = [1, 2, 4, 7, 7, 5];
const sS = secondSmallest(arr);

console.log(sS)