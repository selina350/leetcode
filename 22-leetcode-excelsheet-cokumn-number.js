const titleToNumber = function(columnTitle) {
  let arrOfLetters = columnTitle.split("")
  let res = 0
  arrOfLetters.forEach((letter,i)=>{
    const num = letter.toLowerCase().charCodeAt(0) - 97 + 1
    res += num * Math.pow(26,arrOfLetters.length -i -1)
  })


 return res
};

console.log(titleToNumber("AB"))//28
// console.log(titleToNumber("A"))//1
// console.log(titleToNumber("Z"))//26
// console.log(titleToNumber("ZY"))//701