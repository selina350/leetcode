//Object to array
const obj = {a:1, b:2 , c:3}
//[1,2,3]
//['a','b','c']
//['a1', 'b2', 'c3']
const objToArray = (obj)=>{
  const keysArr = Object.keys(obj)
  const valuesArr = Object.values(obj)

  const res = keysArr.map(key=>
    key + obj[key])
  return res
}

console.log(objToArray(obj))
//Object to a single value
//abc
const objToString = (object)=>{
  const values = Object.keys(object)

  const res = values.reduce((accumulator,value)=>accumulator + value, "" )
  return res
}
console.log(objToString(obj))
//Object to a new Object
const objToNew = (object)=> {
  let res = {}
  const keys = Object.keys(object)
  keys.forEach(key=>{
    res[object[key]] = key
  })
  return res
}

console.log(objToNew(obj))