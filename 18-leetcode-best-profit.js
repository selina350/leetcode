const maxProfit = (arr)=>{
  let buyPrice = arr[0]
  let max = 0
  arr.forEach((num,i)=>{
    if((num - buyPrice) > max){
      max = num - buyPrice
      console.log(max, "max")
    }else if(num <buyPrice){
      buyPrice = num
      console.log(buyPrice, "buyPrice")
    }

  })
  return max
}

console.log(maxProfit([7,5,3,6,1])) //3
console.log(maxProfit([0])) //0