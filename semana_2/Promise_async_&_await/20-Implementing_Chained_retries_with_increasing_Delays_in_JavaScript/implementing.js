async function retryWithDelay(asyncFunction, retries, delay) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      // Try executing the asynchronous function
      return await asyncFunction();
    } catch (error) {
      console.error(`Attempt ${attempt} failed:`, error.message);

      if (attempt === retries) {
        throw new Error('All retries failed'); // Throw error after all retries fail
      }

      // Wait for the specified delay before retrying
      await new Promise((resolve) => setTimeout(resolve, delay * attempt));
    }
  }
}

// Example usage of retryWithDelay
const simulateAsyncTask = async () => {
  if (Math.random() > 0.7) {
    return 'Success!';
  } else {
    throw new Error('Random failure');
  }
};

retryWithDelay(simulateAsyncTask, 5, 1000)
  .then((result) => console.log('Operation succeeded:', result))
  .catch((error) => console.error('Operation failed:', error.message));
