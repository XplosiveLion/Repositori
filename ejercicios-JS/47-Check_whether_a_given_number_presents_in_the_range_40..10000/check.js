// Define a function named test_digit with parameter n
function test_digit(n) {
   // Check if n is less than 40 or greater than 10000
   if (n < 40 || n > 10000)
       // Return false if n is outside the specified range
       return false;
   else
       // Check if n is between 40 and 10000 (inclusive)
       if (n >= 40 && n <= 10000)
           // Return true if n is within the specified range
           return true;
}
// Log the result of calling test_digit with the arguments 40 to the console
console.log(test_digit(45));
// Log the result of calling test_digit with the arguments 79 to the console
console.log(test_digit(79));
// Log the result of calling test_digit with the arguments 30 to the console
console.log(test_digit(30));