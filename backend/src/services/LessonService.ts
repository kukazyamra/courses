import LessonModel from "@/models/LessonModel";
import {Lesson} from "@/interfaces/Interfaces";


export default class LessonService {
    lessonModel:LessonModel;
    constructor(lessonModel:LessonModel) {
        this.lessonModel = lessonModel;
    }
    async create(lesson:Lesson) {
        return await this.lessonModel.create(lesson);
    }

    async getAll() {
        return await this.lessonModel.getAll();
    }

    async getById(id: number) {
        return await this.lessonModel.getById(id);
    }


}