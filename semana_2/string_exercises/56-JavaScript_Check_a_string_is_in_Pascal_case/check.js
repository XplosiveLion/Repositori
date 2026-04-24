const test = (word) => {
  if (typeof word !== 'string')
  {
    return 'It must be a string.'
  }
  const pattern = /^[A-Z][A-Za-z]*$/
  return pattern.test(word)
}
console.log(test("XmlStream"))
console.log(test("IOStream"))
console.log(test("IEnumerable"))
console.log(test("javascript"))
console.log(test(12356))