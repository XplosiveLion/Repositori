// Function to create a cancellable Promise
function createCancelablePromise(executor) {
  let cancel;

  const promise = new Promise((resolve, reject) => {
    cancel = () => reject(new Error('Promise cancelled')); // Define cancel function
    executor(resolve, reject);
  });

  promise.cancel = cancel; // Attach cancel function to the promise
  return promise;
}

// Example usage of the cancellable Promise
const cancellable = createCancelablePromise((resolve) => {
  setTimeout(() => resolve('Operation completed!'), 5000); // Simulates an async task
});

cancellable.then(console.log).catch(console.error); // Handle resolution or rejection

setTimeout(() => {
  cancellable.cancel(); // Cancel the promise after 2 seconds
}, 2000);
