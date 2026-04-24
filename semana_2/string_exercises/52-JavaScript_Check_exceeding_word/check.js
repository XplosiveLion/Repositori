const test = (word) => {
  if (typeof word !== 'string') {
        return 'It must be string'
  }

  const upperChars = word
    .toUpperCase()
    .replace(/[^A-Z]/g, '') // remove all from str except A to Z alphabets

  const adjacentDiffList = []

  for (let i = 0; i < upperChars.length - 1; i++) {
    // destructuring current char & adjacent char by index, cause in javascript String is an object.
    const { [i]: char, [i + 1]: adjacentChar } = upperChars

    if (char !== adjacentChar) {
      adjacentDiffList.push(
        Math.abs(char.charCodeAt() - adjacentChar.charCodeAt())
      )
    }
  }

  for (let i = 0; i < adjacentDiffList.length - 1; i++) {
    const { [i]: charDiff, [i + 1]: secondCharDiff } = adjacentDiffList

    if (charDiff > secondCharDiff) {
      return false
    }
  }
  return true
}
console.log(test('acgl'))
console.log(test('aebc'))
console.log(test(12356))