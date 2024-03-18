const merge = (arr1,m,arr2,n)=>{
   let lastIndex = m +n -1
   while(lastIndex>=0){
      if(m === 0 && n>0){
         arr1[lastIndex]= arr2[n-1]
         n--
         lastIndex--
      }
      if(n === 0 && m>0){
         arr1[lastIndex]= arr1[m-1]
         m--
         lastIndex--
      }
      if(m>0 && n>0){
         if(arr1[m-1]>arr2[n-1]) {
            arr1[lastIndex] = arr1[m - 1]
            m--
            lastIndex--
         }else{
            arr1[lastIndex] = arr2[n - 1]
            n--
            lastIndex--
         }
      }

   }
  return arr1
}

console.log(merge([1,2,3,0,0,0,],3,[3,5,6],3)) // [1,2,3,3,5,6]
console.log(merge([0],0,[1],1)) // [1]