function ArrayChallenge(arr) {

  // code goes here
  //input: array of nums
  //output: boolean
  //objective: determine if any two num in array can be multiplied to be greater than sum of all nums * 2

  //start by calculating target (sum array * 2)
  //check the first element of array against multipling it with all other elements
    //if any is greater, return true

  let sum2 = 0//sum of array*2
  for (var i = 0; 0 < arr.length; i++) {
    sum2 += (arr[i]*2);
  }

  console.log('test')

  for (var i = 0 ; i < arr.length - 1; i++) {
    for (var j= i+1; j< arr.length; j++) {
      if (i*j > sum2) {
        return true
      }
    }
  }
  return false;
}
let test1 = [1,2,3,4,5]
console.log(ArrayChallenge(test1))
console.log('hi')