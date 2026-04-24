const longest_Valid_Parentheses = (text) => {
  if (typeof text !== 'string') {
        return 'It must be string'
  }
  const n = text.length 
 const stack = []
  // storing results
  const result = new Array(n).fill(-Infinity)
  for (let i = 0; i < n; i++) {
    const bracket = text[i]
    if (bracket === ']' && text[stack[stack.length - 1]] === '[') {
      result[i] = 1
      result[stack[stack.length - 1]] = 1
      stack.pop()
    } 
    else 
    {
      stack.push(i)
    }
  }
  // summing all adjacent valid
  for (let i = 1; i < n; i++) {
    result[i] = Math.max(result[i], result[i] + result[i - 1])
  }
  // adding 0 if there are none so it will return 0 instead of -Infinity
  result.push(0)
  return Math.max(...result)
}
console.log(longest_Valid_Parentheses("[[]"))
console.log(longest_Valid_Parentheses("][][]]"))
console.log(longest_Valid_Parentheses(""))