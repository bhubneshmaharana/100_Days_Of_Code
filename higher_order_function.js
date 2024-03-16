// Higher order function : A function that takes another function as an argument or returns a function as a result is called higher order function.


// Callback function : A function that is passed as an argument to another function is called a callback function.

const square = (x) => x*x

const cube = (sqr,x) => sqr(x)*x

console.log(cube(square, 3)) // 27

// returning function : 

const sym = Symbol('Hello JS')

// typrError 
// const str = sym + '' // we can't convert the symbol to string using this method
// const str = sym.toString() // we can't convert the symbol to string using this method
// const str = ''.concat(sym) // we can't convert the symbol to string using this method


const str = String(sym) // converting the symbol to string

console.log(str) // Symbol(Hello JS)



const str_1 = new String('Hello JS') // calling String constructor
const str_2 = 'Hello JS' // calling string literal
const str_3 = String('Hello JS') // calling string function

str_1[0] = 'g' // this will not work as string is immutable
str_2[0] = 'g' // this will not work as string is immutable
str_3[0] = 'g' // this will not work as string is immutable
console.table([str_1, str_2, str_3]) // [String: 'Hello JS'] , 'Hello JS', 'Hello JS'


const arr_1 = new Array(1,2,3,4,5) // calling Array constructor
const arr_2 = [1,2,3,4,5] // calling array literal
const arr_3 = Array(1,2,3,4,5) // calling array function

console.table([arr_1, arr_2, arr_3]) // [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ], [ 1, 2, 3, 4, 5 ]