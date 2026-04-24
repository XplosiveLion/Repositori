const test = (text) => {
  if (typeof text !== 'string') {
    return 'It must be a string.'
  }
  const pattern = /^[a-z]*$/
  return pattern.test(text)
}
console.log(test('j'))
console.log(test('java exercises'))
console.log(test('JavaScriptExercises'))
console.log(test('javascriptexercises'))
console.log(test(12356))
