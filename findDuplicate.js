var findDuplicate = function(paths) {
  let contentKey = {};

  //interating through each folder
  for (var i = 0; i < paths.length; i++) {
    let parse = paths[i].split(' ')
    let folder = parse[0]
    //interating through each file
    for (var j = 1; j < parse.length; j++) {
      let parseContent = parse[j].split('(')
      let fileName = parseContent[0]
      let fileContent = parseContent[1].split(')')[0]

      if (!contentKey[fileContent]) {
        contentKey[fileContent] = [];
      }
      contentKey[fileContent].push(folder+'/'+fileName)
    }
  }
  //console.log(contentKey)
  let result = []
  for (var key in contentKey) {
    if (contentKey[key].length > 1) {
      result.push(contentKey[key])
    }
  }
  return result
};



var testInput = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]

console.log(findDuplicate(testInput))