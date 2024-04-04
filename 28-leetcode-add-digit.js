const addDigit = (num)=>{
  const arr = num.toString().split("")
  if(arr.length<2)return num
  const total = arr.reduce((accu,curr)=>accu+ +curr,0)
  console.log(total)
  return addDigit(total)

}


console.log(addDigit(32)) //5
console.log(addDigit(0))//0
console.log(addDigit(158))//5