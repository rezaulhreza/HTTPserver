const { Console } = require('console')
const url = require('url')

const myUrl  = new URL('http://www.rezaulhreza.co.uk/index.html?id=1,status=active')

//serialized url

console.log(myUrl.href)
console.log(myUrl.toString())

//host ( root domain)
console.log(myUrl.host)

//host name does not get port
console.log(myUrl.hostname)

//path name
console.log(myUrl.pathname)

//serialized query

console.log(myUrl.search)

//params object
console.log(myUrl.searchParams)

//Add param

myUrl.searchParams.append('hello', '100')
console.log(myUrl.searchParams)

//loop through params

myUrl.searchParams.forEach((value, name) => 
     console.log(`${name}: ${value}`));