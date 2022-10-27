//undefined 

//typeinference based declaration

//incase if variable is undefined with respect to default declaration the type of variable is not fixed - looks like plain js.

let myvar
console.log(myvar)
myvar = 10
console.log(myvar)
myvar = "Hello"
console.log(myvar)

let myvar2: undefined
//myvar2 =10 compile time

//as per ts coding standards: the variable must have at least a data type. what if i dont know the type of variable in advance...

//any
let mynewvar: any = 1
console.log(mynewvar)

mynewvar = "test"
console.log(mynewvar)

mynewvar = true
console.log(mynewvar)



