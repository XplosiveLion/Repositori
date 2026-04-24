const test = (text) => {
  if (typeof text !== 'string') {
        return 'It must be a string.'
  }
  const pattern = /(\w+)-(\w)([\w-]*)/
  return pattern.test(text) && !text.includes('_')
}
console.log(test('j'))
console.log(test('Java-Exercises'))
console.log(test('JavaScript-Exercises'))
console.log(test('javascript_exercises'))
console.log(test(12356))