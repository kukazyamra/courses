import express, { Router } from "express";
import UserController from "@/controllers/UserController";

export const routes = (userController: UserController): Router => {
    const router = express.Router();

    router.post('/register', userController.register);
    router.post('/login', userController.login);
    router.post('/logout', userController.logout);

    return router;
}