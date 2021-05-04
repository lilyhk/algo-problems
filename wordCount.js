const fs = require('fs');

var countWords = function(cb) {
  fs.readFile('/Users/lilykong/Documents/Algo-Problems/test.txt', 'utf8', (err, data) => {
    if (err) {
      console.log("Error reading file", err)
      return
     }
     console.log("SUCCESS!", data)
     cb(0, data.split(' ').length)
  })
  //return text.split(' ').length
}

console.log(countWords((err, data) => {
  //console.log(data+1)
  return data+1
}))
let a = 'Before becoming a software engineer, I worked in corporate retail. My first position after college was for a small lighting company in Atlanta where I was an analyst reporting directly to the president of the company. That position was followed by roles working for a few well known Bay Area retailers managing sales plans for departments upwards of $150m in retail sales. My experience first working for a small company (roughly 50 employees) could not have prepared me better for the roles I later filled. I had the opportunity to wear many hats and learn how various departments within a company work together. While working at larger companies, I gained experience working cross-functionally with merchants, marketing, and production teams to develop buy-strategies and promo plans, and pitching these plans to directors and VPs on a weekly basis. My job not only required analyzing and interpreting data, it also focused heavily on problem solving and team work, both with other functions and fellow planners. My work had its own exciting challenges but I knew I wanted to tackle something new and different. I also know that my skills gained over the years, both soft and analytical, will not go to waste'

let b = 'My journey towards becoming a software engineer has been a slow and drawn-out one. I had always had an interest but also had self-doubt. When high school teachers said to me, "Lily, have you ever considered becoming an engineer?", my reply was "Oh No! It\'s not for me." When I finally talked myself into taking a leap of faith and set a timeline to apply to a bootcamp, I surprised myself when I found I had accounts already with a few well known self studying sites that dated back to 2012. It was a dream that I completely suppressed. When I did get accepted into a bootcamp I delayed my start-date due to feelings that I needed just a little more time to prepare in order to get the most out of it. My close friend who happen to work for LinkedIn at the time has been one of my biggest supporters through this journey of mine. When she found out I had delayed my start date, she said to me the following: "I think that if you feel you need more time, then you should take more time. But I know quite often Asian women like us tend to doudt and under estimate our own abilities and I want to make sure that\'s not the reason for delaying." I assured her it was not but it did leave me thinking that it very well may have played a part. What drew me towards becoming a software engineer has always been the creative aspect of it. I have always been into creating, picking up various hobbies such as painting, drawing, cooking, sewing, pottery, candle making, soap making, leather work, and the list goes on. I saw writing software as another medium. When I told my husband what I was set on doing, his reply was "Great! Now you can finally build all those things you had ideas for." It\'s been a year since that discussion and I know the journey is nowhere near over. I graduated from Hack Reactor this past January and have been working for the program as a Software Engineer Immersive Resident ever since. Although I had some self-doubt along the way, I\'ve never questioned whether or not it was the right descission. There may have been moments where I questioned if I would pickup the material within the intensive timeline of the program but I never doubted my ability to learn it eventually or my ability to become a software engineer. What draws me to the SRE role is a visibility to the bigger picture. Like other forms of art, a piece is never perfect. There\'s always something that can be improved. '

