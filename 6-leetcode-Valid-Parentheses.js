//{}=> true
//}{=> false
//[}=> false

const validParentheses = (str)=>{
  let res
  let shouldSkip
  const reference = {"[":"]", "{":"}","(":")"}
  const arr = str.split("")
  arr.forEach((para,i)=>{
    if(shouldSkip){
      shouldSkip = false
      return
    }

    if(reference[para]){
      shouldSkip = true
    }else{
      res = false
      return
    }


  })
  if(res === undefined) res = true
  return res
}



console.log(validParentheses("()"))
console.log(validParentheses("()]["))