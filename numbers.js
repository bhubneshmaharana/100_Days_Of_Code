// number -> integer, float, NaN, Infinity, -Infinity

// 1. constructor method
let num_1 = Number(12)

// 2. literal method
let num_2 = 12

// 3. reference method
let num_3 = new Number(12)

console.log(num_1, num_2, num_3)


// Math Object

// 1. Math.PI
let num = Math.PI



// 2. Math.round()
console.log(Math.round(num)) 

// Assiment : ceil() and floor()

// 2.1 Math.ceil() -> 3
// 2.9 Math.floor() -> 2

// 3. Math.abs()
let negVal  = -10

console.log(Math.abs(negVal))


// 4. Math.pow() , Math.sqrt(), 

// 5. Math.min() , Math.max()
console.log(Math.min(1, 2, 3, 4, 5))
console.log(Math.max(1, 2, 3, 4, 5))


// conversion 
let arr = [1, 2, 3, 4, 5]

let str = 'hello'
let char = 'a'

// 1. parseInt()
console.log(parseInt(char))
console.log(parseInt(str))
console.log(parseInt(arr))
console.log(parseInt(null))
console.log(parseInt(undefined))

// assignment paserFloat()