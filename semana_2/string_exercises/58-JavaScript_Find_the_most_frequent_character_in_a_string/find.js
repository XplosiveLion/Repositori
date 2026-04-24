const test = (str) => { 
   if (str.length === 0) 
    {
    return 'String should not be empty!'
   }
    if (typeof str !== 'string')
     {
       return 'It must be a string.'
     }
  const occurrence_Map = new Map()

  for (const char of str) 
    {
      occurrence_Map.set(char, occurrence_Map.get(char) + 1 || 1)
    }

  // find the max char from the occurrence map
  let max_char = { char: '', occur: -Infinity }

  for (const [char, occur] of occurrence_Map) {
    if (occur > max_char.occur) {
      max_char = { char,occur }
    }
  }

  return max_char.char
}
console.log(test("Madam"))
console.log(test("civic"))
console.log(test("HellloL223LLL"))
console.log(test(12321))