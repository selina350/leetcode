
// arrayOfIntegers: [2, 5, 1, 4, 9, 6, 3, 7];
// upperBound: 9;
// lowerBound: 1;
const findMissingNumber= (arr, upperBound, lowerBound)=>{
    let sum = 0
    for(let i = lowerBound;  i< upperBound +1;i++){
      sum += i
    }
    const sumOfArr = arr.reduce((accumulator,curr)=>accumulator + curr,0)
  return sum - sumOfArr
}
//time complex o(n)
//space complex o(1)
console.log(findMissingNumber([2,1,4],4,1)) //3
console.log(findMissingNumber([2, 5, 1, 4, 9, 6, 3, 7],9,1)) //8