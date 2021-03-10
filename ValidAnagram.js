/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/
var isAnagram = function(s, t) {
  //loop through s string and keep track of letter counts
  //loop through t string and do the same
  //check all keys in s and make sure their values are same in t
  //make sure t doenst have extra keys that s does not have
  var trackLetters = function(string) {
      let obj = {};
      for (var i = 0; i < string.length; i++) {
          if (!obj[string[i]]) {
              obj[string[i]] = 1;
          } else {
              obj[string[i]]++
          }
      }
      return obj;
  }

  let ObjS = trackLetters(s);
  let ObjT = trackLetters(t);

  if (Object.keys(ObjS).length === Object.keys(ObjT).length) {
      for (var key in ObjS) {
          if (ObjS[key] !== ObjT[key] ) {
              return false;
          }
      }
      return true;
  }

  return false;
};