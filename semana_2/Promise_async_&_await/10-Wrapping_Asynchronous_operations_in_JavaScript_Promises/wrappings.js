// Function to simulate an asynchronous operation using setTimeout
function asyncOperationWithTimeout(delay) {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    // Simulate success or failure using a random boolean
    const isSuccess = Math.random() > 0.5;

    // Use setTimeout to simulate a delay
    setTimeout(() => {
      if (isSuccess) {
        resolve(`Operation succeeded after ${delay}ms`);
      } else {
        reject(new Error(`Operation failed after ${delay}ms`));
      }
    }, delay);
  });
}

// Test the custom Promise wrapper
asyncOperationWithTimeout(1000)
  .then((result) => console.log(result)) // Log success message
  .catch((error) => console.error(error)); // Log error message