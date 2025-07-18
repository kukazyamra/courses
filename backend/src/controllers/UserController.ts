import UserService from "@/services/UserService";
export default class UserController {
    userService: UserService;
    constructor(userService: UserService) {
        this.userService = userService;
    }
}

