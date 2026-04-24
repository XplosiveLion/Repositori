async function fetchInParallel(urls) {
  const startTime = performance.now(); // Start measuring time

  // Use Promise.all to fetch all URLs in parallel
  const results = await Promise.all(urls.map((url) => fetch(url).then((res) => res.json())));

  const endTime = performance.now(); // End measuring time
  console.log(`Parallel fetch completed in ${(endTime - startTime).toFixed(2)} ms`);
  return results;
}

// Example usage for parallel fetch
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3',
];

fetchInParallel(urls).then((results) => console.log('Parallel Results:', results));
