// operator -> mathetical and logical 

// Assignment -> return a numeric value

let a = 10 
let b = 20

// console.log(a+b) // 30
// console.log(a-b) // -10
// console.log(a*b) // 200
// console.log(a**b) // 100000000000000000000
// console.log(a%b) // 10
// console.log(a/b) // .5



// comparison -> return boolean

// console.log(a>b)
// console.log(a>=b)
// console.log(a<b)
// console.log(a<=b)
// console.log(a==b)
// console.log(a!=b)
// console.log(a===b)


// console.log(0 == '')  // true
// console.log(0 == ' ') // false
// console.log(0 === ' ') // false
// console.log(a == '10') // trues 
// console.log(a === '10') // false 


// console.log(0 == null) // false 
// console.log(0 >= null) // true
// console.log(0 > null) // false
// console.log(0 <= null) // true 

// console.log(null == '')  // false 
// console.log(null == ' ') // false
// console.log(null >= '') // true
// console.log(null > '') // false

// console.log('' == undefined) // false 
// console.log(null == undefined) // true 
// console.log('' >= undefined) // false 
// console.log(0 == NaN) //false
// console.log(parseInt(undefined))


// logical operators 
// AND - &&
let userVariable = 10
let userVariable2 = 20
// console.log(userVariable>5 && userVariable < 15)
// console.log(userVariable2>5 && userVariable2 < 15) // false

// OR - ||
// console.log(userVariable>5 || userVariable < 15) // true
// console.log(userVariable2>5 || userVariable2 < 15) // true


// NOT = !
// let bool = true
// console.log(!bool) // false
// console.log(userVariable>5 && !(userVariable < 15)) // false

// let isLogIn = false
// if(!isLogIn){
//  console.log("user is logged out")
// }
// console.log(!(true) == false) // true


// increment
console.log(a) // 10

// pre-increment -> use the updated value of var
console.log(++a) // a=11
console.log(a) // a=11

// post-increment -> update the value of var after using it
console.log(a++) // a =11
// a = 12
console.log(a)


// ternary operator ( ? )

// if(a == 10){
//  console.log("a is 10 ")
// }
// else{
//  console.log("a is not equal to 10")
// }
a == 10 ? console.log("a is 10"): console.log("a is not 10")

