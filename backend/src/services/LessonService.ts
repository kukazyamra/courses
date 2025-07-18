import LessonModel from "@/models/LessonModel";


export default class LessonService {
    lessonModel:LessonModel;
    constructor(lessonModel:LessonModel) {
        this.lessonModel = lessonModel;
    }
}