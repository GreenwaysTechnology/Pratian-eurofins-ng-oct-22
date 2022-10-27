//declare function

function sayHello() {
    //function body
    console.log('Hello')
}
sayHello()
//Args, returns : data types

//explicit arg type
function sayHai(name: string) {
    console.log(`Hai ${name}`)
}
sayHai('Subramanian')
//sayHai() //error : we need to pass value
//sayHai(10)//error : we need to pass only string

//implicit, type inference based type
//by default the type of myvar would be any
function myFun(myvar) {
    console.log(myvar)
}
myFun(10)
myFun("Test")
myFun(true)
//myFun() compile time error

// i have function args , what if i dont pass any value

//es 6 default args
function add(a: number = 0, b: number = 0) {
    let c = a + b
    console.log(`The result is ${c}`)
}
add(10, 10)
add()

//ts optional args
function substract(a?: number, b?: number) {
    let c = a - b
    console.log(`The result is ${c}`)
}
substract(10, 10)
substract()

//return type

function multiply(a: number = 0, b: number = 0): number {
    return a * b
}
console.log(multiply(10, 10))
console.log(multiply())

// function div(a: number = 0, b: number = 0):any {
//     return a / b
// }
function div(a: number = 0, b: number = 0) {
    return a / b
}
console.log(div(10, 10))

//function does not return any thing..
function save(): void {
    console.log('save')
    // return ''
}







