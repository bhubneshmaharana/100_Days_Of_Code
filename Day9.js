/*
const userName = "bhubnesh"

{
    if(userName === "bhubnesh"){
        console.log(userName, ",welcome to JS.")
    }
    else{
        console.log("Invalid input")
    }
}

// ternary operator

const a = 10
const b = 20

// if(a>b) {
//     console.log(a-b)
// }
// else{
//     console.log(b-a)
// }
// 0 - > false 
// rest  - > true

a>b ? console.log(a-b) : console.log(b-a)


// array -> 
// array are not primitive dataType
// arrays are mutable 
// ES6 -> functional programming language 
// create
const arr_1 = [] // empty string
const arr_2 = Array() // constructor 
const arr_3 = new Array() // refrence object

let cart_1 = ['Milk', "bead", 'Eggs']

// access 
// console.log(cart[0])
// console.log(cart[1])
// console.log(cart[2])
// console.log(cart[3])

// modify 
cart_1[2] = 'Protien Powder'
console.log(cart_1[2]) //
console.log(cart_1) 


let cart_2 = ['furits', ['potato','tomato','onions'], 'Maida', 'Sooji']


// merging a array 
//let cart = cart_1.concat(cart_2)
//let cart = [ ...cart_1, ...cart_2] // spead operator
let cart = cart_2.flat(Infinity) // [ 'furits', 'potato', 'tomato', 'onions', 'Maida', 'Sooji' ]
cart =  cart.concat(cart_1)
console.log(cart)




// length property
console.log(cart.length) // 9

// methord of array object 
// includes() -> it boolean value 
console.log(cart.includes('Protien Powder')) // true 
// indexOf() -> index of the element 
console.log(cart.indexOf('Protien Powder')) // 8 
console.log(cart.indexOf('Egg')) // -1

// splice 
let vamshi_bag = cart.splice(6,3)
let sai_bag = cart.splice(0)
console.log(vamshi_bag) // [ 'Milk', 'bead', 'Protien Powder' ]
console.log(sai_bag) // [ 'furits', 'potato', 'tomato', 'onions', 'Maida', 'Sooji' ]
console.log(cart) // []


// push 
vamshi_bag.push('Chicken Briyani')
sai_bag.push('Loplop')
console.log(vamshi_bag)
console.log(sai_bag)

// pop
let plate = "empty"
plate = vamshi_bag.pop()
console.log(plate)


// unshift()
let furit_basket = "empty"
furit_basket = sai_bag.shift()
console.log(furit_basket)
console.log(sai_bag)

// shift

*/

// Date 
let date = new Date()

console.log(date) // 2024-03-16 T12:16:11.999Z

// methords of the Date Object 
const month = date.getMonth() 
console.log(month) // march - 2 
//const minute = date.getMinute()

console.log(date.getHours())
console.log(date.setFullYear())
console.log(date.getTime())


// Loops 
// for -> working with itteration
let output = ""
for(let i = 1; i<=10 ; i++){
     output = (output + `> ${i}`)
}
console.log(output)


// while -> working condition (condistional looping) 
let j = 10 
let arr = []
while(j<14){
    arr.push(j)
    j++;
}
console.log(arr)


// for in 
for (const i in arr){
    console.log([i])
}


// for of (ES6)
for (const element of arr){
    console.log(element)
}
