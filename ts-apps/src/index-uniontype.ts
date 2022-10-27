//Union type : the variable can hold more than one data type.

//only numbers
let a: number = 10

//union types
let myvar: number | string;
myvar = 100;
myvar = "900"
//myvar =true //compile time 

//define union constant values
let gender: "Male" | "FeMale" | "Third"
gender = "Male"
////////////
//function args and union type
function printId(id: string | number) {
    //console.log(id.toUpperCase())
    if (typeof id === 'string') {
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}
printId("abc")
printId(12)

function getPersonDetails(name?: string, age?: number, gender?: "Male" | "Female" | "Third") {
    console.log(name, age, gender)
}
getPersonDetails('Subramanian', 18, "Male")