// Function that returns an array containing the first and last elements of the input array
function started(nums) {
     var array1 = [];
     array1.push(nums[0], nums[nums.length - 1]);

     return array1;
}

// Example usage of the started function with different input arrays
console.log(started([20, 20, 30]));
console.log(started([5, 2, 7, 8]));
console.log(started([17, 12, 34, 78]));  