// Function to simulate an asynchronous task
const asyncTask = (taskName, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${taskName} completed`);
      resolve(taskName);
    }, time);
  });
};

// Function to execute tasks in sequence using async/await
const executeTasks = async () => {
  const result1 = await asyncTask("Task 1", 1000); // Wait for Task 1
  console.log(result1);

  const result2 = await asyncTask("Task 2", 2000); // Wait for Task 2
  console.log(result2);

  const result3 = await asyncTask("Task 3", 1500); // Wait for Task 3
  console.log(result3);

  console.log("All tasks completed sequentially");
};

// Execute the function
executeTasks();