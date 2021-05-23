/*
n = 5
sprint = [2,4,1,3]
expected output = 2

n = 10
sprint = [1, 5, 10, 3]
espected output  = 5
*/

var getMostVisited = function (n,sprints) {
  //will need to keep track of points visited
  //will need to increment every visit to a point
    //a point will need to be incremented everytime it is passed or if a sprint starts or ends at that point

  //will need to determine point(s) with max number of visits
  //will need to return the lowest value if multi points exist

  let count = {};

  for (var i = 0; i < sprints.length - 1; i++) {
    //if the next marker is greater than the one before it
    let marker = sprints[i+1]
    if (sprints[i+1] > sprints[i]) {
      while (marker >= sprints[i]) {
        if (!count[marker]) {
          count[marker] = 1;
        } else {
          count[marker]++
        }
        marker--
      }
    } else {
      while (marker <= sprints[i]) {
        if (!count[marker]) {
          count[marker] = 1
        } else {
          count[marker]++
        }
        marker++
      }
    }
  }
  let frequency = 0
  let mark = n;
  for (var key in count) {
    if (count[key] > frequency) {
      frequency = count[key]
    }
  }

  for (var key in count) {
    if (count[key] === frequency && Number(key) < mark) {
      mark = Number(key)
    }
  }
  return mark;
}

console.log(getMostVisited(10,[1,5,10,3]))
