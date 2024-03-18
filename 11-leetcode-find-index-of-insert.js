
//nums = [1,3,5,6], target = 5 => 2
//nums = [1,3,5,6], target = 2 => 1
//nums = [1,3,5,6], target = 7 => 4

const searchInsert = (arr, target)=>{
  let left = 0
  let right = arr.length -1
  if( arr.length ===0){
    return 0
  }

  while(left < right){
    let mid = Math.floor((right + left)/2)
    if(right - left <=1){
      return right
    }
    if(arr[mid] < target){
      left = mid
    }else{
      right = mid
    }

  }
}
//
console.log(searchInsert([1,3,5,6],2))
console.log(searchInsert([1,3,5,6,9],5))
console.log(searchInsert([1,3,5,6,9,10],8))