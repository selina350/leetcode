//haystack = "sadbutsad", needle = "sad" => 0
//haystack = "leetcode", needle = "leeco" => -1
//haystack = "testabc", needle = "abc" => 4

const strStr = (haystack, needle)=> {
  let isFound = false
  for(let i = 0; i < haystack.length - needle.length +1; i++){
    console.log(haystack.substring(i, i+ needle.length))
    if(haystack.substring(i, i+ needle.length) === needle){
      isFound = true
      return i
    }
  }
  if(isFound === false) return -1

}



console.log(strStr("sadbutsad","sad"))
console.log(strStr("testabc","abc"))