// Function that returns a nested Promise structure
function getNestedPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        new Promise((resolve) => {
          setTimeout(() => resolve('Nested Promise Resolved!'), 1000);
        })
      );
    }, 1000);
  });
}

// Async function to resolve the nested Promise structure
async function handleNestedPromise() {
  const firstLevel = await getNestedPromise(); // Resolves the outer promise
  const result = await firstLevel; // Resolves the nested promise
  console.log(result); // Output: Nested Promise Resolved!
}

handleNestedPromise();
