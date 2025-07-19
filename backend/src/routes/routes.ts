import express, { Router } from "express";
import UserController from "@/controllers/UserController";
import CourseController from "@/controllers/CourseController";
import LessonController from "@/controllers/LessonController";

export const routes = (courseController:CourseController, userController:UserController, lessonController:LessonController): Router => {
    const router = express.Router();

    router.post('/register', userController.register);
    router.post('/login', userController.login);
    router.post('/logout', userController.logout);

    router.post('/courses',courseController.create);
    router.get('/courses', courseController.getAll);
    router.get('/courses/:id', courseController.getById);
    router.get('/courses/:id/lessons', courseController.getCourseLessons);

    router.post('/lessons',lessonController.create);
    router.get('/lessons', lessonController.getAll);
    router.get('/lessons/:id', lessonController.getById);

    return router;
}