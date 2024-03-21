// Higher order function : A function that takes another function as an argument or returns a function as a result is called higher order function.


// Callback function : A function that is passed as an argument to another function is called a callback function.

const square = (x) => x*x

// sqr is the callback function here, 
// cube is the higher order function .
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

