function numKeypadSolutions(wordlist, keypads) {
  //check how many words the keypad can make from the word array
  //start with the first keypad in the keypad array
  //will need to go through entire word array
  //start a counter
  //check if first letter is in the first word and check if the first letter of the word is in the keypad
      //if not, move to next word
      //if yes, check if all the letters from the word are in the keypad
        //if yes, add to the counter, then move onto next word in the word array
        //if no, move to the next word in the word array
  //push the counter into the result array
  //repeat for each keypad

let result = [];

var checkOne = function(keypad) {
  let count = 0;

  for (var i = 0; i < wordlist.length; i++) {
    if (wordlist[i].includes(keypad[0]) && keypad.includes(wordlist[i][0])) {
      //check if the first letter of the word is in the keypad
      let addOne = true
      for (var j = 0; j < wordlist[i].length; j++) {
        if (!keypad.includes(wordlist[i][j])) {
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