//s = "Hello World" => 5
//s= "   fly me   to   the moon  " => 4
//s = "luffy is still joyboy"=> 6

const lengthOfLastWord = (s)=>{
  const arr = s.split(" ")
  console.log(arr)
}


console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord(""))
console.log(lengthOfLastWord("luffy is still joyboy"))
