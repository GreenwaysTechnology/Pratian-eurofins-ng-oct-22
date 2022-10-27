//container objects : Array,Promise.
//Generics : Type wrapper 

//arrays
//it is not type safe
let list = [1, 2, "hello", true]

//type safe array : using generics notation
let newList: Array<number> = [1, 2, 3]
let strList: string[] = ["one", "two", "three"]

class User {
    id: number
    name: string
}
let userList: Array<User> = [{
    id: 1,
    name: 'a'
},
{
    id: 2,
    name: 'a1'
}

];
