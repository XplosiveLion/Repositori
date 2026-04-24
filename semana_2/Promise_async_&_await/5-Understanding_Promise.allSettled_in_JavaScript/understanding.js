// Define multiple Promises
const promise1 = Promise.resolve("Resolved from promise1");
const promise2 = Promise.reject("Error from promise2");
const promise3 = Promise.resolve("Resolved from promise3");

// Use Promise.allSettled to handle both resolved and rejected results
Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log("Fulfilled:", result.value);
      } else if (result.status === "rejected") {
        console.log("Rejected:", result.reason);
      }
    });
  });