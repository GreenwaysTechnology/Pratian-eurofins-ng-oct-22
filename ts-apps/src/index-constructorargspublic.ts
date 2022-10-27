//code refactoring: how to reduce code.

//class with more instance fields


//without refactoring

// class User {
//     //instance fields
//     userId: number
//     firstName: string
//     lastName: string
//     city: string
//     status: boolean
//     //constructor args are called local variables
//     constructor(userId: number = 0, firstName: string = "", lastName: string = "", city: string = "", status: boolean = false) {
//         this.userId = userId
//         this.firstName = firstName
//         this.lastName = lastName
//         this.city = city
//         this.status = status
//     }
// }

//with reactoring level - 1 : remove all instance field declaration.

//After removing, you can mark constructor local variables into instance variables by marking the variable either public or private
// class User {
//     //now constructor args  are instance variables
//     constructor(public userId: number = 0, public firstName: string = "", public lastName: string = "", public city: string = "", public status: boolean = false) {
//         this.userId = userId
//         this.firstName = firstName
//         this.lastName = lastName
//         this.city = city
//         this.status = status
//     }
// }

//with reactoring level - 2 : remove all instance field initalzation inside constructor.

class User {
    constructor(public userId: number = 0, public firstName: string = "", public lastName: string = "", public city: string = "", public status: boolean = false) { }
}


let user = new User(1, "Subramanian", "murugan", "Coimbatore", true)
console.log(user)