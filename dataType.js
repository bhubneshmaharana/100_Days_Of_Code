// data type -> object 

// int x = 10 ;

// var 
// let and const are block scope
let variable = 10
variable = 20
const constant = 9

// constant = 12 

// Primitive data type -> stack and immutable (we do overwritting)
// Number
let num = 10 
num = 6

let num2 = num
num2 = 8

console.log(num2)

// String
let str = "Hello"
str = "World"

console.log(str)

// Boolean
let bool = true

// Null
let n = null

// Undefined
let unDefined 

// Symbol
let sym = Symbol('foo')


// non-primitive data type -> heap and mutable

// array
let arr = [1,2,3,4,5]
// arr[0] = 0

let arr2 = arr
arr2[0] = 10

console.log(arr,arr2)

// object
let obj = {
    name : "Rohan",
    age : 20
}


// Assignment : shallow copy and deep copy