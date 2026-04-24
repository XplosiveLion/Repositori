// Create a Promise that rejects after a delay
const delayedRejection = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("An error occurred!"); // Reject the Promise with an error message
  }, 1000); // Delay of 1 second
});

// Handle the Promise and catch the rejection
delayedRejection
  .then((result) => {
    console.log("This will not be logged:", result); // Will not execute because the Promise rejects
  })
  .catch((error) => {
    console.error("Caught an error:", error); // Logs the rejection message
  });