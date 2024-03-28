const maxDivide= (a,b)=>{
  while(a%b ===0){
    a = a/b
  }
  return a
}
const isUglyNumber = (n)=>{
  if(n <=0) return false

  n = maxDivide(n,2)
  console.log(n)
  n = maxDivide(n,3)
  console.log(n)
  n = maxDivide(n,5)
  console.log(n)
  return n===1 || n===-1
}
console.log(isUglyNumber(-2147483648))