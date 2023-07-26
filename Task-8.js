// Task 8: Implement a JavaScript function to find the second smallest element in
// an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
}

let arr = [10, 30, 17, 25, 25, 20];
let result = findSecondSmallest(arr);
console.log("The second smallest number is:", result);
