// Function to simulate an async operation with a delay
function asyncOperation() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Async operation completed!'), 3000); // Resolves after 3 seconds
  });
}

// Function to simulate a loading spinner
async function simulateLoadingSpinner() {
  console.log('Loading...'); // Display loading message
  const result = await asyncOperation(); // Wait for async operation to complete
  console.log(result); // Display the result after completion
}

simulateLoadingSpinner();
