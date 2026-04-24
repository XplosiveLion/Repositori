const test = function(text) {
    if (typeof text !== 'string') {
        return 'It must be string'
  } 
  const n = text.length
  if (n==0)
    {
      return text
    }
  const data = new Array(n).fill(0).map(item => new Array(n).fill(0).map(item => 0))
  for (let i = 0; i < n; i++) 
   {
    data[i][i] = 1
   }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n - i; j++) 
       {
      const col = j + i
      if (text[j] === text[col]) 
      {
        data[j][col] = 2 + data[j + 1][col - 1]
      } 
      else 
      {
        data[j][col] = Math.max(data[j][col - 1], data[j + 1][col])
      }
    }
  }
  return data[0][n - 1]
}
console.log(test("aaaba"))
console.log(test("maadaem"))
console.log(test("zkksk"))
console.log(test("ab"))
console.log(test(""))