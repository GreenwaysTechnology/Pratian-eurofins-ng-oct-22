
class User {
    private userName: string = "admin"
    private password: string = "admin"

    public getInfo() {
        return this.userName + this.password
    }
}
let user = new User()
// console.log(user.userName) // Property 'userName' is private and only accessible within class 'User'.
console.log(user.getInfo())