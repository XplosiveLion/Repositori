// Define a function that returns a Promise
function performTask(taskName, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${taskName} completed`);
    }, delay); // Simulate task delay
  });
}

// Chain of asynchronous tasks
performTask("Task 1", 1000) // First task takes 1 second
  .then((result1) => {
    console.log(result1); // Logs "Task 1 completed"
    return performTask("Task 2", 2000); // Second task takes 2 seconds
  })
  .then((result2) => {
    console.log(result2); // Logs "Task 2 completed"
    return performTask("Task 3", 1500); // Third task takes 1.5 seconds
  })
  .then((result3) => {
    console.log(result3); // Logs "Task 3 completed"
    console.log("All tasks completed!");
  });