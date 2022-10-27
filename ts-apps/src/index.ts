import { UserController } from "./controllers/user.controller";
import { UserService } from "./services/user.service";


let userCtrl = new UserController(new UserService())
userCtrl.init()
