const test = (alpha_text) => {
  if (typeof alpha_text !== 'string') {
    return 'It must be string'
  }

  const new_text = alpha_text.replace(/[^a-z0-9]+/ig, '').toLowerCase()
  const mid_index = new_text.length >> 1  

  for (let i = 0; i < mid_index; i++) {
    if (new_text.at(i) !== new_text.at(~i))
    {  
      return false
    }
  }

  return true
}
console.log(test('$22_|1372^2731|_22'))
console.log(test('12%^&2'))
console.log(test('234%$$%432'))
console.log(test(1234))
console.log(test('aba%$aba'))
console.log(test('Aba%$aba'))