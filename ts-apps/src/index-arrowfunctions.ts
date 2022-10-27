//function literals : arrow functions

//es 5 way of declaration function literals.
let hai: Function = function (name: string): string {
    return `${name}`
}
console.log(hai('Subramanian'))

//es 6 way of declaration of function literals : arrow functions

let hello = (name: string): string => {
    return `Hello ${name}`
}
console.log(hello('Subramanian'))
//if fun has only one line of body, returns , we can remove {} and return statement
hello = (name: string): string => `Hello ${name}`
console.log(hello('Subramanian'))
