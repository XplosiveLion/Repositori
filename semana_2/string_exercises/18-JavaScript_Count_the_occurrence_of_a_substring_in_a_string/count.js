// Source: https://bit.ly/3hEZdCl
// Function to count the occurrences of a substring within a main string
const count_substr = (str, searchValue) => {
  let count = 0, // Initialize a counter variable
    i = 0; // Initialize an index variable
  
  // Loop until the end of the string is reached
  while (true) {
    // Find the index of the next occurrence of the searchValue in the string starting from index i
    const r = str.indexOf(searchValue, i);
    
    // If the searchValue is found in the string
    if (r !== -1) {
      // Increment the counter by 1 and update the index to start searching from the next position
      [count, i] = [count + 1, r + 1];
    } else {
      // If the searchValue is not found, return the final count
      return count;
    }
  }
}; 

// Test cases
console.log(count_substr("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count_substr("The quick brown fox jumps over the lazy dog", 'fox'));