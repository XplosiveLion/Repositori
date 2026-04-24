// Define multiple Promises
const promise1 = new Promise((resolve, reject) => setTimeout(reject, 1000, "Error in promise1"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, "Success from promise2"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 2000, "Success from promise3"));

// Use Promise.any to resolve with the first successful result
Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log("First successful result:", result); // Logs: "Success from promise2"
  })
  .catch((error) => {
    console.error("All promises rejected:", error);
  });