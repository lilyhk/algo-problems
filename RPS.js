var rockPaperScissor = function(n) {
  if (n === 0) {
    return [];
  }
  var result = []
  //create an array to store all permutations
  //create a function to call n times and pushing each permutation into the array.

  var plays = function(string) {
    //build permutation
    if (string.length === n) {
      result.push(string)
      return
    }
    ['r', 'p', 's'].forEach(option => {
      plays(string + option)
    })
  }

  plays('')
  return result;
}

console.log(rockPaperScissor(2))