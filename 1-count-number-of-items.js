//Here are some check out items
const items = [
  {
    name: 'apple',
    quantity: 3,
  },
  {
    name: 'peach',
    quantity: 2,
  },
  {
    name: 'banana',
    quantity: 1,
  },

  {
    name: 'apple',
    quantity: 1,
  },

  {
    name: 'banana',
    quantity: 2,
  },
];
//1. write a function that count the total quantity of each items
const findSum = (items)=>{
  let res = {}
  items.forEach(item=>{
    if(res[item.name] === undefined){
      res[item.name] = item.quantity
    }else{
      res[item.name] += item.quantity
    }
  })
  return res
}

console.log(findSum(items))
//2. Use reduce to rewrite your function
const findSumReduceImplementation = (items) =>
  // items.reduce(
  //   //your code here
  //   function (acc, item) {
  //
  //     let key = item.name
  //
  //     if (!acc[key]) {
  //
  //       acc[key] = item.quantity
  //
  //     }
  //
  //     acc[key] += item.quantity
  //
  //     return acc
  //
  //   }, {}
  // )
items.reduce((acc, item) =>{
  let key = item.name
  if(!acc[key]){
    acc[key] = item.quantity
  }
  acc[key] += item.quantity
  return acc
},{})

console.log("reduce", findSumReduceImplementation(items))

//3. Here's the products information Please use it to calculate the total price of given items.
const products = [
  {
    name: 'apple',
    price: 3
  },
  {
    name: 'peach',
    price: 5,
  },
  {
    name: 'banana',
    price: 1,
  },
]

const getPrice = (items, products) => {
  //your code here
  let sum = 0
  const countsObj = findSumReduceImplementation(items)
  // products.reduce((acc, product)=>{
  //   acc = product.price * countsObj[product.name]
  //   return acc
  // },0)
  products.forEach(product=>{
    sum += product.price * countsObj[product.name]
  })
  return sum
}
console.log(getPrice(items, products))

//4. what's the complexity of finding the price of a product? How can you improve it?
