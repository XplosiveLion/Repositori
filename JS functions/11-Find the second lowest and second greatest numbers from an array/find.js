// Define a function named Second_Greatest_Lowest that finds the second smallest and second largest numbers in an array
function Second_Greatest_Lowest(arr_num) {
  // Sort the array in ascending order using a custom comparison function
  arr_num.sort(function(x, y) {
    return x - y;
  });

  // Initialize an array uniqa with the first element of the sorted array
  var uniqa = [arr_num[0]];
  
  // Initialize an array result to store the second smallest and second largest numbers
  var result = [];

  // Iterate through the sorted array to remove duplicate elements
  for (var j = 1; j < arr_num.length; j++) {
    if (arr_num[j - 1] !== arr_num[j]) {
      uniqa.push(arr_num[j]);
    }
  }

  // Push the second smallest and second largest numbers to the result array
  result.push(uniqa[1], uniqa[uniqa.length - 2]);

  // Join the result array into a string and return
  return result.join(',');
}

// Log the result of calling Second_Greatest_Lowest with the input array [1,2,3,4,5] to the console
console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5])); 