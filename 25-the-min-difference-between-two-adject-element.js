const minDifference = (arr)=>{
  if(arr.length<2)return
  let res =arr[1] - arr[0]
  arr.forEach((num,i)=>{
    if(arr[i+1]- num<res){
      res =arr[i+1]- num
    }
  })
  return res
}

console.log(minDifference([1,3,5,6])) //1
console.log(minDifference([1])) //1