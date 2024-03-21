// Array - Object that storing a collection of multiple items under a single variable name

//properties 
// 1. Dynamic resizable - don't have to declare the size of the array before run time

// 2. 0 based indexing
let array = new Array('hello',1,true)
console.table(array)

// 3. shallow copy 
const arr = [1,2,3]
let arr_2 = arr

// mutation
arr_2[0] = 0

// methods
arr_2.push(1)

console.log(arr,arr_2) // arr is constant still it value is changing bcz arr store reference not values 
// on changing the arr_2, changes are getting propagated on the arr(even thought it is a constant it is changing)


// types of declaration  
// 1. literal method 
const a_1 = []

// 2. constructor method
const a_2 = Array()

// 3. reference method
const a_3 = new Array()


// object 
let cart = ['bread', 'milk', 'eggs']

// access the object 
// 0 based indexing
console.log(cart[0])
console.log(cart[1])
console.log(cart[2])

// updating the array 
arr[2] = 'butter'

// modifying the array
// 1. push() 
cart.push('coffee')
cart.push('wafflers')
cart.push('sugar')
console.log(cart)

// 2. pop()
cart.pop()
console.log(cart)

// Assignment -> study the working and behavior of shift() and unshit()


//joining two array 
let cart_1 = 



// methods of the array
// 1. include()
cart.includes("eggs")


// 2. indexOf()
cart.indexOf("eggs")



// 3. join()
cart.join("*")



// 4. slice()
cart.slice()



// 5. splice() 
cart.splice("eggs")
































