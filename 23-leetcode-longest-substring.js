const longestSubstringLength = (s)=>{
   const lowerCase = s.toLowerCase()
   let begin = 0
   let longestSubS = lowerCase.slice(begin,1)

   let res =0
   for(let i = 0;i<lowerCase.length;i++){
      if(longestSubS.includes(lowerCase[i+1])){
         let newBegin = longestSubS.indexOf(lowerCase[i+1])
         begin += newBegin+1
      }

      longestSubS = lowerCase.slice(begin,i+2)
      if(res < longestSubS.length){
         res = longestSubS.length
      }

   }
   return res
}

console.log(longestSubstringLength("YazaAay")) //3
console.log(longestSubstringLength("pwwkew")) //3
console.log(longestSubstringLength("dvdf")) //3