const mySqrt = (x)=>{
  let res = 0
  for(let i = 0; i <=x; i++){
    if(i*i <= x){
      res = i
    }else{
      return res
    }
  }
  return res
}

console.log(sqrt(8)) //2
console.log(sqrt(4)) //2
console.log(sqrt(14))//3
console.log(sqrt(0))//0