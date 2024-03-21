## Loops

repeated execution of a block of code 

### for Loop 

Mostly used for running iterative loop 

```js
// For loop structure
for(initialization, condition, updating){
  // code goes here
}
```

### while loop

Used in case of conditional looping 

```js
//While loop structure
initiallisation
while (condition) {
  // code goes here 
  updation
}
```

### do while loop

This is a exit control loop and the loop is executed at least one time 

```js
initialisation
do {
  // code goes here
  updation
} while (condition)

```

### for of loop

It a shorthand of 'for' loop introduces in ES6, used to iterate through the elements of object, array and string without index. 

```js
for (const element of arr) {
  // code goes here
}
```

### for in loop 

It is similar of 'for of loop' but this is used to iterate through the indices of the var.

```js
for (const element of arr){
  //codes goes here 
}
```


## Loop control Statements

These are some keywords used to manipulate the flow of the loop.

### break

Break is used to interrupt a loop.

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}

// 0 1 2
```

### continue

We use the keyword *continue* to skip a certain iterations. 

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}

// 0 1 2 4 5
```
