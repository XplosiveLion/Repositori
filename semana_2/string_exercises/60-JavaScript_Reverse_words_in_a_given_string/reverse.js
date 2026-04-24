function test(text) {
   if (text.length === 0) 
    {
    return 'String should not be empty!'
     }
   if (typeof text !== 'string')
     {
       return 'It must be a string.'
     }
   var words = [];
  words = text.match(/\S+/g);
  var reverse_word = "";
  for (var i = 0; i < words.length; i++) {
     reverse_word += words[i].split('').reverse().join('') + " ";
  }
  return reverse_word
}
console.log(test("abc"))
console.log(test("JavaScript Exercises"))
console.log(test(1234))