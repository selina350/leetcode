const addBinaryString = (a,b)=>{
  // let sum = parseInt(a,2) + parseInt(b,2)
  // let res = []
  // while(sum >=1){
  //   res.push(sum % 2)
  //   sum = Math.floor(sum / 2)
  // }
  // return res.reverse().join("").toString()
  let arrA = a.split("")
  let arrB = b.split("")


  arrA = arrA.map(str=>parseInt(str))
  arrB = arrB.map(str=>parseInt(str))
  let i = arrA.length -1
  let j = arrB.length -1
  let res =[]
  let carry = 0
  while(i>=0 || j>=0 ||carry!==0){
    let num1 = arrA[i] || 0
    let num2 = arrB[j] || 0
    let sum = num1+ num2 + carry
    let remainder = sum % 2
    carry= Math.floor(sum /2)
    res.push(remainder)
    i--
    j--
  }
  return res.reverse().join("")
}

console.log(addBinaryString("11","1")) //100
console.log(addBinaryString("1010","1011")) //10101