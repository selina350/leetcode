//1122 => 3
//1111 => 4
//91212129 =>9
//1234 =>0

const sillySum = (num)=>{

  const arr = num.toString().split("")
  let res = 0
  let isRepeated = false
  arr.forEach((num, i)=>{
    if(arr[i+1] === num){
      res += + num
      isRepeated = true
    }
  })
  if(isRepeated === false){
    if(arr[0]===arr[arr.length-1]){res = arr[0]}

  }
  return res
}


console.log(sillySum(1122)) //3
console.log(sillySum(91212129)) //9
console.log(sillySum(1234)) //9