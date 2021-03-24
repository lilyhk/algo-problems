const fs = require('fs');

var countWords = function(cb, fileName) {

  fs.readFile('/Users/lilykong/Documents/Algo-Problems/test.txt', 'utf8', (err, data) => {
    if (err) {
      console.log("Error reading file", err)
      return
     }
     cb(0, data.split(' ').length)
  })
}

countWords((err, data) => {
  console.log(data)
})





