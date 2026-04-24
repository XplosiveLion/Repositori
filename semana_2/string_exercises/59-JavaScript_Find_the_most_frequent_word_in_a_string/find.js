const test = (text) => { 
   if (text.length === 0) 
    {
    return 'String should not be empty!'
   }
    if (typeof text !== 'string')
     {
       return 'It must be a string.'
     }
   const data = text.split(' ')
  if (data.length < 2) {
    return data[0]
  }
   const words = text.split(' ')
  if (words.length < 2) {
    return words[0]
  }
  const temp = {}
  words.forEach(word => {
    temp[word.toLocaleLowerCase()] = temp[word.toLocaleLowerCase()] + 1 || 1
  })
  const max = Object.keys(temp).reduce((n, word) => {
    if (temp[word] > n.count) 
    { 
      return { word, count: temp[word] } 
    } 
    else 
    { 
      return n 
    }
  }, { word: '', count: 0 })
  return max.word
}
console.log(test("The quick brown fox jumps over the lazy dog"))
console.log(test("Python is a high-level, general-purpose programming language."))
console.log(test(" It was the same man, she was sure of it. It's always the same, Chauncey."))
console.log(test(12321))