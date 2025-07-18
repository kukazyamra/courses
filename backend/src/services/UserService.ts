import UserModel from "@/models/UserModel";

export default class UserService {
    userModel: UserModel;
    constructor(userModel: UserModel) {
        this.userModel = new UserModel();
    }


}