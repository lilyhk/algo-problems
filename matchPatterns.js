var wordPattern = function(pattern, s) {
  //input: string pattern , string sentence
  //output: boolean
  //edge:
  //constraints: string is at least length 1

  //will need to keep track of letters and location in pattern
  //will need to set each word in string to letter in pattern to ensure match.
  //check if pattern and sentence is same lenth
if (pattern.length !== s.split(' ').length) {
    return false
    }
//create object to store key(letter)/value(word) pair
var charkeys = {}
var wordkeys = {}

for (var i = 0; i < pattern.length; i++) {
    if (!charkeys[pattern.split('')[i]] && !wordkeys[s.split(' ')[i]]) {
        charkeys[pattern.split('')[i]] = s.split(' ')[i]
        wordkeys[s.split(' ')[i]] = pattern.split('')[i]
    }
    if (charkeys[pattern.split('')[i]] !== s.split(' ')[i]) {
        return false;
    }

}
return true
};