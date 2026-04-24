const test = (word) => {
    if (word.length === 0) 
    {
    return 'String should not be empty!'
   }
    if (typeof word !== 'string')
     {
       return 'It must be a string.'
     }
   const char_ctr = [...word].reduce((obj, el) => {
    obj[el] = obj[el] ? obj[el] + 1 : 1
    return obj
  }, {})
  return Object.values(char_ctr).filter(count => count % 2 !== 0).length <= 1
}
console.log(test("maamd"))
console.log(test("civic"))
console.log(test("IO"))
console.log(test(12321))