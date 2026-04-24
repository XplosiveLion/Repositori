// Function to simulate an asynchronous task
const asyncTask = (taskName, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${taskName} completed`);
      resolve(taskName);
    }, time);
  });
};

// Array of tasks
const tasks = [
  () => asyncTask("Task 1", 1000),
  () => asyncTask("Task 2", 2000),
  () => asyncTask("Task 3", 1500),
];

// Process tasks sequentially using Promise.then()
const processTasksSequentially = (tasks) => {
  let promise = Promise.resolve();

  tasks.forEach((task) => {
    promise = promise.then(() => task());
  });

  return promise;
};

// Execute the tasks
processTasksSequentially(tasks).then(() => {
  console.log("All tasks completed sequentially");
});