//helper function to convert strings to objects where keys are letters in the string.
var convertToLettersObject = function(words) {
  let newArray = [];

  for (var i = 0; i < words.length; i++) {
    let word = words[i];
    let array = word.split('');
    let letterObject = {};
    for (var j = 0; j < word.length; j++) {
      letterObject[array[j]] = array[j]
    }
    newArray.push(letterObject)
  }

  return newArray;
}


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
  let wordsArr = convertToLettersObject(words);
  let keypadsArr = convertToLettersObject(keypads);
  let result = [];

  var checkOne = function(keypad,keyLetter) {
    let count = 0;

    for (var i = 0; i < wordsArr.length; i++) {
      //checks if the word contains the first letter of the keypad
      if (wordsArr[i][keypad[keyLetter]] ) {
        let addOne = true
        for (var key in wordsArr[i]) {
          if (!keypad[key]) {
            addOne = false;
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

  for (var i = 0; i < keypadsArr.length; i++) {
    var numberCombo = checkOne(keypadsArr[i], keypads[i][0])
    result.push(numberCombo)
  }

  return result;

}

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