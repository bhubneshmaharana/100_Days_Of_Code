// function - block of code that can be called and executed

// function declaration
// function name(params) {
//     // block code 
// }

// function declaration
function greet() {
    console.log('Hello javaScript')
}

// function call
greet()

// parameterized function
// function add(num1, num2){
//     console.log(num1 + num2)
// }

// arguments
// add(2,5)

// function overloading
function add(num1=10){
    let sum = 0
    for (const num of arguments) {
    sum += num
    }
 //   console.log(arguments)
 console.log(sum)
}

add(2,5,7)

// default parameter
function greetUser(name = 'bhubnesh'){
    console.log('Hello',name)
}

greetUser('sai')
greetUser()

// return statement -> return the value from the function
let output = add(10,20)
console.log(output) // undefined

// if function dont have return statement then it will return undefined

function diff(num1, num2){
    return num1 > num2 ? num1 - num2 : num2 - num1
}

output = diff(5,10)
console.log(output)


// anonymous function
// function(){
//     console.log('hello')
// }

// function expression
output = function(num1, num2){
    return num1 * num2
}

console.log(output(5,10))

// self invoking function
output = (function(num1, num2){
    return num1 * num2
} (3,5)  )
console.log(output)

// arrow function
output = (name= ' bhubnesh ') => {
    console.log("hi ", name," this a arrow function")
    return 
}

console.log(output('bhubensh'))

output = (num1, num2) => num1+num2


console.log(output(10,20))

// diffrence function vs function
let f_1 = function(){
    console.log(this)
}

let f_2 = () => console.log(this)

f_1()
f_2()


// arrow fuction overloading -> arrow dont't have arguments array
output = (...args) => {
    let result = 1
    for (const n of args){
        result *= n
    }
    return result
}

console.log(output(1,4,6,9))
console.log(output(1,4))
console.log(output())

// object as parameter 
let user = {
    name : "bhubensh ",
    age : 24
}

function userDeatil(user){
    return `hello ${user.name} your age is ${user.age}`
}

console.log(userDeatil(user))

// array as parameter 
let arr = [1,2,3,4,5,6]

function odd(num){
    let odd = []

    for (const n of num){
        n%2 != 0 ? odd.push(n) : {}
    }
    return odd
}

console.log(odd(arr)) // [ 1, 3, 5 ]



