const findFirstMissingInteger = (arr)=>{
   const sortedArr = arr.sort()
   let res = 0
   let isFound = false
   sortedArr.forEach((num,i)=>{
     if(num>0){
        if(sortedArr[i+1]>num +1){
           res = num+1
           isFound = true
        }
     }
   })
   if(!isFound){
      res = sortedArr[sortedArr.length -1]+1
   }
   return res
}

console.log(findFirstMissingInteger([3,4,-1,1])) //2
console.log(findFirstMissingInteger([1, 2, 0])) //3