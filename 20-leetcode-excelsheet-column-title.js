//701 => ZY
//28 => AB
//1=>  A
const columnTitle = (num)=>{
  let res =""
  while(num >0){
      res += Math.floor((num -1)/26)
    console.log(res)
      num = (num -1)%26
    console.log(num)

  }
  return res
}

console.log(columnTitle(702))