// Function to create a promise that resolves after a given number of milliseconds
function delay(milliseconds) {
  // Return a new promise
  return new Promise((resolve) => {
    // Use setTimeout to delay execution
    setTimeout(() => {
      resolve(`Resolved after ${milliseconds} milliseconds`);
    }, milliseconds);
  });
}

// Test the function
delay(2000).then((message) => console.log(message)); // Logs: Resolved after 2000 milliseconds
