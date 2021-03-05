const fs = require('fs');

var countWords = function(cb) {
  fs.readFile('/Users/lilykong/Documents/Algo-Problems/test.txt', 'utf8', (err, data) => {
    if (err) {
      console.log("Error reading file", err)
      return
     }
     //console.log("SUCCESS!", data)
     cb(0, data.split(' ').length)
  })
  //return text.split(' ').length
}

countWords((err, data) => {
  console.log(data)
  //return data
})





