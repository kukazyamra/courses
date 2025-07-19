import UserModel from "@/models/UserModel";
import bcrypt from "bcrypt";
import {User} from "@/interfaces/Interfaces";

export default class UserService {
    userModel: UserModel;
    constructor(userModel: UserModel) {
        this.userModel = new UserModel();
    }

    register = async(userData:User)=> {

        const hashed = await bcrypt.hash(userData.password, 10);
        const newUser = { ...userData, password: hashed };
        return await this.userModel.register(newUser);

    }
    async login(email: string, password: string) {
        const user = await this.userModel.findByEmail(email);
        console.log(user);
        if (!user) throw new Error('Invalid credentials');


        const match = await bcrypt.compare(password, user.password);
        if (!match) throw new Error('Invalid credentials');

        return {
            id: user.id,
            email: user.email,
        };
    }
}