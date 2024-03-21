
/*
// shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. 

// shallow -> both the variables point to same memory address
let vamshi_cart = Array('bread', 'milk', 'paneer')

let sai_cart = vamshi_cart

sai_cart[2] = 'mill-maker'  
console.log(vamshi_cart, sai_cart)


// A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
let mother_lastName =  "maharana"
let my_lastName = mother_lastName

my_lastName = 'chandra maharana'

console.log(my_lastName,mother_lastName)



// Objects -> store key-value pairs 


// type declare 
const obj_1 = {} // litteral  
const obj_2 = Object() // calling constructor
const obj_3 = new Object() // reference function


// object declaration 
let saiDetails = {
    name: "saivrastav",
    phoneNo : 92309223094,
    age : 19,
    isMarraid : false,
    semMarks : [9,8.7,8.5,9.2]
}

// const saiDetail = ["saivrastav",92309223094,19,false,[9,8.7,8.5,9.2]]

// console.log(saiDetail,saiDetails)

// access 
// 1. using the . operator
console.log(saiDetails.semMarks[2]) //true

// 2. using the key indexing
console.log(saiDetails['isMarraid']) // false

// modification
saiDetails.isLoggedIn = false 


// mutable 
saiDetails.isMarraid = true

console.log(saiDetails)

const wifeDetails = {
    name: "sunita",
    phoneNo : 782724239,
    age : 18,
    isMarraid : true,
    semMarks : [9,8.7,8.5,9.2]
}

// merge 

// 1. spread 
const jointAccount = {...saiDetails, ...wifeDetails}
console.log(jointAccount)

// freeze 
Object.freeze(jointAccount)
jointAccount.isLoggedIn = true

console.log(Object.isFrozen(jointAccount))
console.log(jointAccount)


//assign()

const obj = Object.assign({},saiDetails,wifeDetails)
// const obj = Object.assign(saiDetails,wifeDetails)
console.log("obj :" ,obj)
console.log(saiDetails)

// keys()
console.log(Object.keys(jointAccount))

// values()
console.log(Object.values(saiDetails))

// enties()
console.log(Object.entries(saiDetails))

// hasOwnProperty()
console.log(saiDetails.hasOwnProperty('name'))
console.log(saiDetails.hasOwnProperty('lastName'))


*/
    
//function ->
function sum(a,b){
    console.log(a+b)
}