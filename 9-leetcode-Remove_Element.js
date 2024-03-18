//[1,2,1],1=>1  [2,_,_]
//[0,1,2,1,0,2],0=>4  [1,2,1,2,_,_]

const removeElement = (arr, val)=>{
  //iteration
  let j = 0
  //overwrite value
  let k = 0
  let res = 0
  while(j < arr.length){
    if(arr[j] !== val){
      arr[k] = arr[j]
      k++
    }
    j++
  }


  for(let i = k; i < arr.length; i++){arr[i] = "-"}


console.log(arr)
return k

}

console.log(removeElement([0,1,2,1,0,2], 1))
console.log(removeElement([1,3,0,1,0,0], 0))