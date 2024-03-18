const isPalindrome = (s)=>{
  let lowerCaseS = s.toLowerCase().split("")
  lowerCaseS= lowerCaseS.filter((str,i)=>
    s.charCodeAt(i) >96 && s.charCodeAt(i) <123
  )
  const strOfLowerCaseS = lowerCaseS.join("")
  const backS = lowerCaseS.reverse().join("")
  return backS === strOfLowerCaseS
}


console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
