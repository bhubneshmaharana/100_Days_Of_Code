

// function : a block of code that do some operations

//function definition
function Greet() {
    console.log("welcome to JS")
}

//function reference 
Greet 
//function call
Greet() 

var x = 10

// System Check 
console.log(typeof(typeof x)) // String how 
console.log(undefined + undefined)  // NaN
console.log(x + undefined) // NaN

// parameterised function 
function sum(num1, num2){
    console.log(num1+num2)
}

sum(1,2) // 3
sum(1,'1') // 11
sum('1','1') // 11
sum() // undefined 
// when no parameter is passed then argument remains undefined

// lets store the output of the function

const result = sum(1,2) // 3
console.log(result) // undefined

// function return - 
// 1. ends the function execution 
function test(){
    message = "this is function output."
    return message
    console.log(message)
}

const output  = test()
console.log("sunction output :", output)

// 2. specify the value to be returned to the function caller
function sub(n,m){
    return n>m ? n-m : m-n
}

const s1 = sub(9,2)  // 7
const s2 = sub(1,2) // 1

console.table([s1,s2])
 
  // if a function don't have a return expression then, it return undefined
  // now we understand why sum() result was undefined

// default parameter 
function hello(userName = "bhubnesh"){
     return `${userName}, welcome to the JavaScript !`
}

console.log(hello("Vamshi")) // vamshi, welcome to the JavaScript !
console.log(hello()) // bhubnesh, welcome to the JavaScript !

// arguments 
// function overloading 
function userCartCost() {
    let totalCost = 0
    for (const item of arguments){
        totalCost += item
    }
    return totalCost
}

console.log(userCartCost(10,20,30)) // 60
console.log(userCartCost(10,20,30,40,-50)) // 50

// rest operator
function user(firsName, secoundName, ...otherInformation){
    return `${firsName} ${secoundName} bio : ${otherInformation}`

}

console.log(user("Bhubnesh", "Maharana", 24, "Odisha"))