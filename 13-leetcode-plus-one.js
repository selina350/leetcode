const plusOne = (arr)=>{
  const num = arr.reduce((accu,current)=>accu + current.toString())
  const newNum = +num + 1
  const res  = newNum.toString().split("")
  return res
}

console.log(plusOne([9,1,2]))
console.log(plusOne([9]))