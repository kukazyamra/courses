import UserService from "@/services/UserService";
import { Request, Response } from "express";
import {StatusCodes} from "http-status-codes";

export default class UserController {
    userService: UserService;
    constructor(userService: UserService) {
        this.userService = userService;
    }

    register = async (req: Request, res: Response) => {
        try {
            const user = await this.userService.register(req.body);
            res.status(StatusCodes.CREATED).json(user);
        } catch (err: any) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({  message: 'Internal Server Error'});
            console.log(err);
        }
    };

    login = async (req: Request, res: Response) => {
        try {
            const user = await this.userService.login(req.body.email, req.body.password);
            req.session.user = user;
            res.status(StatusCodes.OK).json(user);
        } catch (err: any) {
            res.status(StatusCodes.UNAUTHORIZED).json({ error: err.message });
        }
    };

    logout = (req: Request, res: Response) => {
        req.session.destroy(() => {
            res.status(StatusCodes.OK).json({ message: 'Logged out' });
        });
    };


}

