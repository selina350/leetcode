const checkSum = (arr)=>{
  let res = 0
  arr.forEach(nestedArr =>{
    let max = nestedArr[0]
    let min = nestedArr[0]
    nestedArr.forEach((num,j)=>{
      if(num > max){
        max = num
      }
      if(num < min){
        min = num
      }
    })
    res += max - min
  })
  return res
}


console.log(checkSum([
  [5, 1, 9, 5],
  [7, 3],
  [2, 6, 8]
])) // 8+4+6 =18