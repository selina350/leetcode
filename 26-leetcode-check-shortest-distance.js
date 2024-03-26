const checkShortestDistance = (arr,s1,s2)=>{
  let res = arr.length -1
  let j = 0
  let k = arr.length -1

  arr.forEach((s,i)=>{
      if(s===s1){
        j = i

      }

      if(s===s2){
        k = i

      }

      if(Math.abs(j-k)< res){
        res = Math.abs(j-k)

      }
  })
  return res
}


console.log(checkShortestDistance( ["practice", "makes", "perfect", "coding", "makes"], "makes","coding"))//1