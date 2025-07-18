import express, { Express } from "express";
import cors from "cors";
import session from "express-session";

import CourseController from "@/controllers/CourseController";
import UserController from "@/controllers/UserController";
import LessonController from "@/controllers/LessonController";
import CourseModel from "@/models/CourseModel";
import LessonModel from "@/models/LessonModel";
import UserModel from "@/models/UserModel";
import CourseService from "@/services/CourseService";
import LessonService from "@/services/LessonService";
import UserService from "@/services/UserService";





const app: Express = express();
import './utils/load-env.js'


app.use(cors({
  origin: '*'
}))
app.use(express.json());

const userModel = new UserModel();
const lessonModel = new LessonModel();
const courseModel = new CourseModel();

const userService = new UserService(userModel);
const lessonService = new LessonService(lessonModel);
const courseService = new CourseService(courseModel);

const userController = new UserController(userService);
const lessonController = new LessonController(lessonService);
const courseController = new CourseController(courseService);



const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send('Response');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});