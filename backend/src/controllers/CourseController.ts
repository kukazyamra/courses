import CourseService from "@/services/CourseService";
import { Request, Response } from 'express';
import {StatusCodes} from "http-status-codes";

export default class CourseController {
    courseService: CourseService;
    constructor(courseService: CourseService) {
        this.courseService = courseService;
    }

    create = async (req: Request, res: Response) => {
        try {
            const course = await this.courseService.create(req.body);
            res.status(StatusCodes.CREATED).json(course);
        } catch (err: any) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({  message: 'Internal Server Error'});
            console.log(err);
        }
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const courses = await this.courseService.getAll();
            res.status(StatusCodes.OK).json(courses);
        } catch (err: any) {
            console.error(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Failed to retrieve courses' });
        }
    }
    getById = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid course ID' });
            }

            const course = await this.courseService.getById(id);
            if (!course) {
                return res.status(StatusCodes.NOT_FOUND).json({ message: 'Course not found' });
            }

            res.status(StatusCodes.OK).json(course);
        } catch (err: any) {
            console.error(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Failed to retrieve course' });
        }
    }

    getCourseLessons = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid course ID' });
            }

            const lessons = await this.courseService.getCourseLessons(id);
            if (!lessons) {
                return res.status(StatusCodes.NOT_FOUND).json({ message: 'Lessons not found' });
            }

            res.status(StatusCodes.OK).json(lessons);
        } catch (err: any) {
            console.error(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Failed to retrieve lessons' });
        }
    }

}