
var combos = function(words, keypads) {
  /*check how many words the keypad can make from the word array
start with the first keypad in the keypad array
will need to go through entire word array
start a counter
check if first letter is in the first word
  if not, move to the next word
  if yes, check if all the letters from the word are in the keypad
    if yes, add on to the count, then move onto next word in the word array
    if no, move to the next word in the word array
push the counter into the result array
repeat for each key pad*/
  let result = [];

  var checkOne = function(keypad) {
    let count = 0;

    for (var i = 0; i < words.length; i++) {
      if (words[i].includes(keypad[0]) && keypad.includes(words[i][0])) {
        //check if the first letter of the word is in the keypad
        let addOne = true
        for (var j = 0; j < words[i].length; j++) {
          if (!keypad.includes(words[i][j])) {
            addOne = false
            break
          }
        }
        if (addOne) {
          count++
        }
      }
    }
    return count;
  }

  for (var i = 0; i < keypads.length; i++) {
    var numberCombo = checkOne(keypads[i])
    result.push(numberCombo)
  }

  return result;

}

//combos(['one','two', 'three'])

//test

//combos(['one','two', 'three'])
var one = ['APPLE', 'PEACHES', 'PEARS', 'SEARCH', 'PEACHES', 'PEARS', 'SEARCH', 'PEACHES', 'PEARS', 'SEARCH', 'PLEASE', 'BANANAS', 'RASPBERRIES']
var two = ['PXLRENS', 'ASLECPH', 'SERACHP', 'CKEHRAS', 'ASLECPH', 'SERACHP', 'CKEHRAS', 'ASLECPH', 'SERACHP', 'CKEHRAS', 'ANJESBJ', 'EINVFJN', 'ANRCJEO', 'AIRNCSZ', 'URINDSO']

//console.log(combos(one,two))

//build test to check if function can handle word array length of 100
var buildStr = function() {
  let letters = ['A', 'B','C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let length = Math.floor(Math.random() * (10 - 5) + 5);
  let string = '';
  for (var i = 0; i < length; i++) {
    let letter = letters[Math.floor(Math.random() * 25)];
    string += letter;
  }
  return string
}

var buildDictionary = function(n) {
  var array = []
  for (var i = 0; i < n; i++) {
    let randomStr = buildStr()
    array.push(randomStr)
  }
  return array;
}

var test260 = (buildDictionary(260000))

combos(test260,two)
console.log(combos(one,two))

