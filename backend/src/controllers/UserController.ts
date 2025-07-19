import UserService from "@/services/UserService";
import { Request, Response } from "express";

import {constants} from 'http2'

export default class UserController {
    userService: UserService;
    constructor(userService: UserService) {
        this.userService = userService;
    }
    register = async (req: Request, res: Response) => {
        try {
            const user = await this.userService.register(req.body);
            res.status(constants.HTTP_STATUS_CREATED).json(user);
        } catch (err: any) {
            res.status(constants.HTTP_STATUS_BAD_REQUEST).json({  message: 'Internal Server Error'});
            console.log(err);
        }
    };

    login = async (req: Request, res: Response) => {
        try {
            const user = await this.userService.login(req.body.email, req.body.password);
            req.session.user = user;
            res.status(constants.HTTP_STATUS_OK).json(user);
        } catch (err: any) {
            res.status(constants.HTTP_STATUS_UNAUTHORIZED).json({ error: err.message });
        }
    };

    logout = (req: Request, res: Response) => {
        req.session.destroy(() => {
            res.status(constants.HTTP_STATUS_OK).json({ message: 'Logged out' });
        });
    };


}

