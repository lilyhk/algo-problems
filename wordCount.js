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

let a = 'Before becoming a software engineer, I worked in corporate retail. My first position after college was for a small lighting company in Atlanta where I was an analyst reporting directly to the president of the company. That position was followed by roles working for a few well known Bay Area retailers managing sales plans for departments upwards of $150m in retail sales. My experience first working for a small company (roughly 50 employees) could not have prepared me better for the roles I later filled. I had the opportunity to wear many hats and learn how various departments within a company work together. While working at larger companies, I gained experience working cross-functionally with merchants, marketing, and production teams to develop buy-strategies and promo plans, and pitching these plans to directors and VPs on a weekly basis. My job not only required analyzing and interpreting data, it also focused heavily on problem solving and team work, both with other functions and fellow planners. My work had its own exciting challenges but I knew I wanted to tackle something new and different. I also know that my skills gained over the years, both soft and analytical, will not go to waste'



