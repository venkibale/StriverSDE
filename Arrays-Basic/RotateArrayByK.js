function Reverse( arr,  start,  end){
  while (start <= end)
  {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
// Function to Rotate k elements to right
function Rotateeletoright(arr,  n,  k)
{
  // Reverse first n-k elements
  Reverse(arr, 0, n - k - 1);
  // Reverse last k elements
  Reverse(arr, n - k, n - 1);
  // Reverse whole array
  Reverse(arr, 0, n - 1);
}

// function Rotateeletoleft( arr,  n,  k)
// {
//   // Reverse first k elements
//   Reverse(arr, 0, k - 1);
//   // Reverse last n-k elements
//   Reverse(arr, k, n - 1);
//   // Reverse whole array
//   Reverse(arr, 0, n - 1);
// }

let arr = [1, 2, 3, 4, 5, 6, 7]
Rotateeletoright(arr, arr.length, 2)
console.log(arr)