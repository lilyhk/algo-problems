var numIslands = function(grid) {
  //create a counter
  //loop through each coordinates of grid
    //if land, add to counter and change it to water
      //also check all directions touching that land and do the same.
  //return counter

  let counter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        counter++;
        changeToWater(i,j,grid)
      }
    }
  }
  return counter;
};

//helper function to change a land and all other lands touching it to water so it is not double counted.

var changeToWater = function(row, col, grid) {
  //exit if row or col undefined or if its already water
  if (grid[row] === undefined || grid[row][col] === undefined || grid[row][col] === "0") {
    return;
  };
  //change above, below, left, right to water
  grid[row][col] = '0';
  changeToWater(row + 1, col, grid);
  changeToWater(row - 1, col, grid);
  changeToWater(row, col +1, grid);
  changeToWater(row, col -1, grid);
}


var island3 = [
  ["1","1","0","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

var island1 = [
  ["1","1"],
  ["1","1"]
]

console.log(numIslands(island3))
