// Function to divide two numbers and format the result with commas
function division_string_format(number1, number2) {
    // Check if the divisor is zero
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    // Perform division
    let result = number1 / number2;
    // Format result with commas
    let formattedResult = result.toLocaleString(undefined, {maximumFractionDigits: 2});
    // Return the formatted result
    return formattedResult;
}
// Example usage:
// Define the dividend and divisor
let dividend = 1000000;
let divisor = 107;
// Perform division and format the result
let result = division_string_format(dividend, divisor);
// Print the result
console.log("Result: " + result);