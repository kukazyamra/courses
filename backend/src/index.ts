import express, { Express } from "express";
import cors from "cors";
import session from "express-session";
import './utils/load-env.js'
import {routes} from "@/routes/routes";

import CourseController from "@/controllers/CourseController";
import UserController from "@/controllers/UserController";
import LessonController from "@/controllers/LessonController";
import CourseModel from "@/models/CourseModel";
import LessonModel from "@/models/LessonModel";
import UserModel from "@/models/UserModel";
import CourseService from "@/services/CourseService";
import LessonService from "@/services/LessonService";
import UserService from "@/services/UserService";

const userModel = new UserModel();
const lessonModel = new LessonModel();
const courseModel = new CourseModel();

const userService = new UserService(userModel);
const lessonService = new LessonService(lessonModel);
const courseService = new CourseService(courseModel);

const userController = new UserController(userService);
const lessonController = new LessonController(lessonService);
const courseController = new CourseController(courseService);


declare module 'express-session' {
  interface SessionData {
    user: {
      id: number;
      email: string;
      role?: string;
    };
  }
}

const app: Express = express();


app.use(cors({
  origin: '*'
}))
app.use(express.json());

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
    cookie: {
    secure: false, // true for HTTPS
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}));

// const users = [{ username: "admin", password: "admin" }];

app.use(routes(userController));
// Auth routes
// app.post("/api/login", (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find((u) => u.username === username && u.password === password);
//   if (user) {
//     req.session.user = { username };
//     return res.json({ success: true, user: req.session.user });
//   }
//   return res.status(401).json({ success: false, message: "Invalid credentials" });
// });
//
// app.post("/api/logout", (req, res) => {
//   req.session.destroy(() => {
//     res.clearCookie("connect.sid");
//     res.json({ success: true });
//   });
// });
//
app.get("/api/me", (req, res) => {
  if (req.session.user) {
    return res.json({ authenticated: true, user: req.session.user });
  }
  return res.status(401).json({ authenticated: false });
});

const port = process.env.PORT || 8080;




app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});