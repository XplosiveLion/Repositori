
// --- file: mathOperations.js ---
// Export an async function for demonstration
export async function fetchData() {
  // Simulate a delay with a Promise
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data fetched successfully!'), 1000);
  });
}


// --- file: app.js ---
// Dynamically import the module and use the async function
async function loadAndExecute() {
  // Dynamically import the module
  const module = await import('./mathOperations.js');

  // Call the async function from the module
  const result = await module.fetchData();
  console.log(result); // Output: Data fetched successfully!
}


// --- file: main.js ---
// Dynamically import the module and use the async function
async function processString(input) {
  // Dynamically import the module
  const module = await import('./stringUtilities.js');

  // Call the async function from the module
  const reversed = await module.reverseString(input);
  console.log(reversed); // Output: reversed string of input
}
processString('hello');


// --- file: stringUtilities.js ---
// Export an async function for string manipulation
export async function reverseString(str) {
  // Simulate a delay with a Promise
  return new Promise((resolve) => {
    setTimeout(() => resolve(str.split('').reverse().join('')), 1000);
  });
}