// Define a function that returns a Promise
function simplePromise() {
  // Create and return a new Promise
  return new Promise((resolve) => {
    // Use setTimeout to delay execution for 1 second
    setTimeout(() => {
      resolve("Hello, World!"); // Resolve the Promise with the message
    }, 1000); // 1000ms = 1 second
  });
}

// Call the function and handle the Promise
simplePromise().then((message) => {
  console.log(message); // Logs "Hello, World!"
});