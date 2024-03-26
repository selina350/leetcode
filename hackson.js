const user = [
  {
    "id": 1,
    "userId": 1,
    "userName": "John Oliver",
    "timestamp": 1549536882071,
    "txnType": "debit",
    "amount": "$1,670.57",
    "location": {
      "id": 7,
      "address": "770, Deepends, Stockton Street",
      "city": "Ripley",
      "zipCode": 44139
    },
    "ip": "212.215.115.165"
  },
  {
    "id": 7,
    "userId": 1,
    "userName": "John Oliver",
    "timestamp": 1550456379407,
    "txnType": "credit",
    "amount": "$1,368.81",
    "location": {
      "id": 9,
      "address": "961, Neptide, Elliott Walk",
      "city": "Bourg",
      "zipCode": 68602
    },
    "ip": "5.116.1.11"
  },
  {
    "id": 9,
    "userId": 1,
    "userName": "John Oliver",
    "timestamp": 1551503697834,
    "txnType": "debit",
    "amount": "$295.66",
    "location": {
      "id": 6,
      "address": "206, Portaline, Brooklyn Avenue",
      "city": "Brownlee",
      "zipCode": 80358
    },
    "ip": "132.169.40.222"
  },
  {
    "id": 11,
    "userId": 1,
    "userName": "John Oliver",
    "timestamp": 1547112098173,
    "txnType": "debit",
    "amount": "$1,100.59",
    "location": {
      "id": 9,
      "address": "961, Neptide, Elliott Walk",
      "city": "Bourg",
      "zipCode": 68602
    },
    "ip": "142.216.23.1"
  },
  {
    "id": 12,
    "userId": 1,
    "userName": "John Oliver",
    "timestamp": 1553870734435,
    "txnType": "debit",
    "amount": "$892.10",
    "location": {
      "id": 8,
      "address": "389, Everest, Barwell Terrace",
      "city": "Murillo",
      "zipCode": 66061
    },
    "ip": "181.191.153.61"
  },
  {
    "id": 13,
    "userId": 1,
    "userName": "John Oliver",
    "timestamp": 1547039521086,
    "txnType": "credit",
    "amount": "$820.28",
    "location": {
      "id": 8,
      "address": "389, Everest, Barwell Terrace",
      "city": "Murillo",
      "zipCode": 66061
    },
    "ip": "35.151.1.82"
  },
  {
    "id": 14,
    "userId": 1,
    "userName": "John Oliver",
    "timestamp": 1552146846090,
    "txnType": "credit",
    "amount": "$2,984.25",
    "location": {
      "id": 1,
      "address": "948, Entroflex, Franklin Avenue",
      "city": "Ilchester",
      "zipCode": 84181
    },
    "ip": "5.116.1.11"
  },
  {
    "id": 23,
    "userId": 1,
    "userName": "John Oliver",
    "timestamp": 1546301415613,
    "txnType": "debit",
    "amount": "$1,987.18",
    "location": {
      "id": 1,
      "address": "948, Entroflex, Franklin Avenue",
      "city": "Ilchester",
      "zipCode": 84181
    },
    "ip": "5.116.1.11"
  },
  {
    "id": 25,
    "userId": 1,
    "userName": "John Oliver",
    "timestamp": 1548208881338,
    "txnType": "debit",
    "amount": "$2,649.71",
    "location": {
      "id": 9,
      "address": "961, Neptide, Elliott Walk",
      "city": "Bourg",
      "zipCode": 68602
    },
    "ip": "5.116.1.11"
  },
  {
    "id": 27,
    "userId": 1,
    "userName": "John Oliver",
    "timestamp": 1552680889886,
    "txnType": "debit",
    "amount": "$3,102.22",
    "location": {
      "id": 7,
      "address": "770, Deepends, Stockton Street",
      "city": "Ripley",
      "zipCode": 44139
    },
    "ip": "181.191.153.61"
  }
]

const getIdOfHigherValue = (data,monthYear, txnType)=>{
  const newMonthYear = monthYear.split("-")
  const month = +newMonthYear[0]
  const year = +newMonthYear[1]
  let total = 0
  let count = 0
  let res =[]
  data.forEach(obj=>{
    const amount = Number(obj["amount"].slice(1).split(",").join(""))
    if(obj["txnType"]=== "debit"){
      total += amount
      count +=1
    }
  })
  const ave = total/count
  data.forEach(obj=>{
    const amount = Number(obj["amount"].slice(1).split(",").join(""))
    const date = new Date(obj["timestamp"])
    console.log(amount > ave)
    if(obj["txnType"] === txnType && amount > ave && date.getFullYear()=== year && date.getMonth()+1 === month){
       res.push(obj["id"])
    }
  })
  return res
}


console.log(getIdOfHigherValue(user,"02-2019", "debit"))