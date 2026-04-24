// Function to get all possible subsets with a fixed length
function getSubsetsWithLength(arr, length) {
    const result = [];

    // Recursive function to generate subsets
    function generateSubsets(currentSubset, start) {
        if (currentSubset.length === length) {
            result.push([...currentSubset]); // Add a copy of the currentSubset to the result
            return;
        }

        for (let i = start; i < arr.length; i++) {
            currentSubset.push(arr[i]);
            generateSubsets(currentSubset, i + 1);
            currentSubset.pop();
        }
    }

    generateSubsets([], 0);
    return result;
}

// Example usage:
const inputArray = [1, 2, 3];
const subsetLength = 2;
const resultSubsets = getSubsetsWithLength(inputArray, subsetLength);

// Log the result to the console
console.log(resultSubsets);