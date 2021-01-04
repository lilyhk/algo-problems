var gameOfLife = function(board) {
  //copy board
  //at each coordinate, keep track of adjacent 1's.
  //once completed count, modify original board based on counts in copy board
  let copy = board;

  return copy
};

//helper to count 1's
var countLive = function(row,col,board) {
  //top, bottom, left, right, topright, top left, bottomright, bottomleft
  let count = 0;
  let top = [row - 1, col];
  let bottom = [row + 1, col];
  let right = [col]

  return count;
}

var test = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]

console.log(gameOfLife(test))