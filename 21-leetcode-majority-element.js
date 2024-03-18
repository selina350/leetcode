const majorElement = (arr)=>{
 let obj ={}
  arr.forEach(num=>{
    if(!obj[num]){
      obj[num] = 1
    }else{
      obj[num] += 1
    }
  })

  for(let num in obj){
    if(obj[num] > arr.length/2){
      return num
    }
  }
}

console.log(majorElement([2,3,2]))//2
console.log(majorElement([2,2,1,1,1,2,2]))//2