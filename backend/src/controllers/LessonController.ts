import LessonService from "@/services/LessonService";
import {Request, Response} from "express";
import {StatusCodes} from "http-status-codes";
export default class LessonController {
    lessonService: LessonService;
    constructor(lessonService: LessonService) {
        this.lessonService = lessonService;
    }
    create = async (req: Request, res: Response) => {
        try {
            const lesson = await this.lessonService.create(req.body);
            res.status(StatusCodes.CREATED).json(lesson);
        } catch (err: any) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({  message: 'Internal Server Error'});
            console.log(err);
        }
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const lessons = await this.lessonService.getAll();
            res.status(StatusCodes.OK).json(lessons);
        } catch (err: any) {
            console.error(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Failed to retrieve courses' });
        }
    }
    getById = async (req: Request, res: Response) => {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid lesson ID' });
            }

            const lesson = await this.lessonService.getById(id);
            if (!lesson) {
                return res.status(StatusCodes.NOT_FOUND).json({ message: 'Lesson ot found' });
            }

            res.status(StatusCodes.OK).json(lesson);
        } catch (err: any) {
            console.error(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Failed to retrieve course' });
        }
    }


}
