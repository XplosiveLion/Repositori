// A synchronous task that returns a value
function syncTask() {
  return "Synchronous result";
}

// An asynchronous task that resolves after a delay
function asyncTask() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Asynchronous result");
    }, 2000);
  });
}

// Combine synchronous and asynchronous tasks using Promise.all
Promise.all([syncTask(), asyncTask()])
  .then((results) => {
    console.log("Results:", results); // Logs: ['Synchronous result', 'Asynchronous result']
  })
  .catch((error) => {
    console.error("Error:", error); // Logs any errors if they occur
  });
