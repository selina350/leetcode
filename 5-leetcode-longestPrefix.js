//strs = ["flower","flow","flight"]=>"fl"
//strs =["dog","racecar","car"] => ""

const longestPrefix = (arr) =>{
  let res = ""

  for(let i = 0; i < arr[0].length; i++){
    let isMatched = true
    arr.forEach((str, j)=>{


      if(str[i]!== arr[0][i]){
         isMatched = false
      }

    })
    if(isMatched){
      res += arr[0][i]
    }
  }




  return res
}

console.log(longestPrefix(["flower","flow","flight"]))
console.log(longestPrefix(["dog","flow","cat"]))