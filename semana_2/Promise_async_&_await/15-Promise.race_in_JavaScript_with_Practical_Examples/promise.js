// Create three promises with varying delays
const promise1 = new Promise((resolve) => {
  setTimeout(() => resolve('Promise 1 resolved!'), 3000); // Resolves after 3 seconds
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => resolve('Promise 2 resolved!'), 2000); // Resolves after 2 seconds
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => resolve('Promise 3 resolved!'), 1000); // Resolves after 1 second
});

// Use Promise.race to get the first resolved promise
Promise.race([promise1, promise2, promise3]).then((result) => {
  console.log(result); // Output: Promise 3 resolved!
});
