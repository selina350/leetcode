//[1,1,2]=>2  [1,2,_]
//[0,0,0,1,2,2]=>3  [0,1,2,_,_,_]

const removeDuplicates = (arr) => {
  if(arr.length ===0){
    return 0
  }
  let j = 0;
  let k = 0;
  let res = 1;

  while (k < arr.length - 1) {
    if (j === arr.length - 1) {
      arr[k + 1] = '_';
      k++;
      continue;
    }

    if (arr[j + 1] === arr[j]) {
      j++;
    } else {
      arr[k + 1] = arr[j + 1];
      res += 1;
      j++;
      k++;
    }
  }
  console.log(arr);
  return res;
};

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));