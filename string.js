// String -> collection characters

// Declaration 
// 1. literal method
let str_1 = 'hello'

// 2. constructor method
const str_2 = String('hello')

console.log(str_1,str_2)
// console.log(str_1.charAt(0))


// accessing the string
console.log(str_1[0])

// updating the string
str_1[0] = 'H' // immutable
str_1 = 'Hello' // mutable
console.log(str_1)

// methods of the string

// sting merging

// a. + operator
let fname = 'bhubnesh'
let lname = 'maharana'

let fullName = fname + " " +lname

// b. concat()
fullName = fname.concat(" ",lname)

// c. template string
fullName = `${fname} ${lname}`
console.log(fullName)

// length
console.log(fullName.length)

// includes() -> return boolean
console.log(fullName.includes('bhubnesh'))
console.log("Hello World".includes('dd'))

// indexOf() -> return index
console.log(fullName.indexOf('b'))
console.log(fullName.lastIndexOf('b'))

// toUpperCase() -> return string
console.log(fullName.toUpperCase())

// trim() -> return string
let uname = '    bhubnesh    '
console.log(uname)
console.log(uname.trim())

// sub string 
// a. substring()
console.log(fullName.substring(0,8))

// b. slice()
console.log(fullName.slice(-17,8))

// split() -> return array
let str = "abc@def@xyz"
console.log(str.split('@'))

// replace() -> return string
let usr = 'https://www.google%20map.com'
console.log(usr.replace('%20',' '))