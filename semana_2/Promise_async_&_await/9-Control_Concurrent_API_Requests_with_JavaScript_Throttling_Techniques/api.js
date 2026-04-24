// Function to simulate an API request
const apiRequest = (id, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Request ${id} completed in ${time}ms`);
    }, time);
  });
};

// Throttled execution function
const throttledAPI = (requests, maxConcurrent) => {
  const results = [];
  let running = 0;
  let currentIndex = 0;

  return new Promise((resolve) => {
    // Function to process the next request
    const processNext = () => {
      if (currentIndex >= requests.length && running === 0) {
        resolve(results); // Resolve when all requests are processed
        return;
      }

      if (running < maxConcurrent && currentIndex < requests.length) {
        running++; // Increment running count
        const index = currentIndex;
        const request = requests[currentIndex];
        currentIndex++; // Move to the next request

        request().then((result) => {
          results[index] = result; // Store the result
          running--; // Decrement running count
          processNext(); // Trigger the next request
        });
      }
    };

    // Start the initial batch
    for (let i = 0; i < maxConcurrent; i++) {
      processNext();
    }
  });
};

// Create an array of simulated API requests
const requests = [
  () => apiRequest(1, 1000),
  () => apiRequest(2, 500),
  () => apiRequest(3, 1500),
  () => apiRequest(4, 100),
  () => apiRequest(5, 2000),
];

// Run the throttled API with a limit of 2 concurrent requests
throttledAPI(requests, 2).then((results) => {
  console.log("Results:", results); // Logs results in order
});