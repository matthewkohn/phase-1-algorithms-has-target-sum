function hasTargetSum(array, target) {
  // Write your algorithm here
  // Loop through the array
  for (let i = 0; i < array.length; i++) {
    // Find the difference between the target and the current element
    const currentNum = array[i];
    const diff = target - currentNum;
    // Iterate through the rest of the elements in the array
    for (let j = i + 1; j < array.length; j++) {
      // If the current el equals the difference, return true
      if (array[j] === diff) {
        return true;
      }
    }
  }
  // Else return False
  return false;
}

/* 
  Write the Big O time complexity of your function here

  Since I'm using a nested for loop, the time complexity is quadratic O(n^2).
*/

/* 
  Add your pseudocode here

  Loop through the array
  Find the difference between the target and the current element
  Iterate through the rest of the elements in the array
  If the current el equals the difference, return true
      Else return False

*/

/*
  Add written explanation of your solution here
  
  The hasTargetSum function takes two arguments: an array and a target. If any two numbers in the passed in array is equal to the target, the function should return true. If no two numbers in the array equals the target, the function should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5, 9, 13], 6));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([25, 19, 4, 6, 30], 55));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 1));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 5));
}

module.exports = hasTargetSum;
