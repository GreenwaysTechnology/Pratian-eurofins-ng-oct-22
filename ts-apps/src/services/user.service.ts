
//class 
export class UserService {
    constructor() {
        console.log('User service')
    }
    findAll(): Array<string> {
        return ['a', 'b', 'c','d','e']
    }
}