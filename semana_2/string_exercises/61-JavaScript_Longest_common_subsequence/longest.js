function longest_Common_Subsequence(text1, text2) {
  const result = new Array(text1.length + 1).fill(null)
    .map(() => new Array(text2.length + 1).fill(null))
  function test(end1, end2) {
    if (end1 === -1 || end2 === -1) {
      return 0
    }
    if (result[end1][end2] !== null) {
      return result[end1][end2]
    }
    if (text1[end1] === text2[end2]) {
      result[end1][end2] = 1 + test(end1 - 1, end2 - 1)
      return result[end1][end2]
    } else {
      result[end1][end2] = Math.max(
        test(end1 - 1, end2),
        test(end1, end2 - 1)
      )
      return result[end1][end2]
    }
  }
  return test(text1.length - 1, text2.length - 1)
}
console.log(longest_Common_Subsequence("abcda", "abcdef"))
console.log(longest_Common_Subsequence("ABCD", "ACBAD"))
console.log(longest_Common_Subsequence("pqr", "pqr"))
console.log(longest_Common_Subsequence("pqr", "abc"))