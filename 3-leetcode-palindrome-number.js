// Given an integer x, return true if x is a palindrome, and false otherwise.

//1. ask questions

















//a palindrome is an integer when it reads the same forward and backward.

//2. figure out sample inputs and outputs. Brief confirm
// 121 => true
// 123 => false
// 11 =>true
// 1 => true
// 0=> true
// -121 => false
// 1221 => true
// 2525 => false

//3. describe your approach, the most confident("stupid") solution.

//testing while writing code. Interviewer wants to see outcome of each phase.
// const isPalinddrome = (integer)=>{
//   let stringOfInt = integer.toString()
//
//   let arrOfString = stringOfInt.split("")
//   let newArr = []
//   arrOfString.forEach((letter,i)=>{
//     newArr.unshift(letter)
//
//   })
//   return newArr.toString()=== stringOfInt
// }

const isPalinddrome = (integer)=>{
  let stringOfInt = integer.toString()

  let arrOfString = stringOfInt.split("")
  let i = 0
  let j = arrOfString.length -1
  let res
  arrOfString.forEach(num=>{
    if(arrOfString[i] === arrOfString[j]){
      i++
      j--
      if(i > j){
        res = true
        return
      }
    }else{
      res = false
    }
  })
  return res
}

console.log(isPalinddrome(232))
console.log(isPalinddrome(1))
console.log(isPalinddrome(-121))
console.log(isPalinddrome(32))