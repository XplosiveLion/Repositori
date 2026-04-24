// Function simulating an asynchronous task
const asyncTask = (taskName, time, shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(`Error in ${taskName}`); // Reject the promise if shouldFail is true
      } else {
        resolve(`${taskName} completed`); // Resolve the promise otherwise
      }
    }, time);
  });
};

// Function using try...catch to handle errors
const executeTask = async () => {
  try {
    const result1 = await asyncTask("Task 1", 1000, false); // Successful task
    console.log(result1);

    const result2 = await asyncTask("Task 2", 2000, true); // Failing task
    console.log(result2); // This won't execute if Task 2 fails
  } catch (error) {
    console.error("Caught an error:", error); // Handle the error
  } finally {
    console.log("Execution finished"); // Always executes
  }
};

// Run the function
executeTask();