import { UserService } from "../services/user.service";

export class UserController {
    constructor(private userService: UserService) {
        console.log('User service')
    }
    init() {
        console.log(this.userService.findAll())
    }
}