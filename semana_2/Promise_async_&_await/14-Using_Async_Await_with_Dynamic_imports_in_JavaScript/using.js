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


