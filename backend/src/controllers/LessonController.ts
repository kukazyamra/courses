import LessonService from "@/services/LessonService";
export default class LessonController {
    lessonService: LessonService;
    constructor(lessonService: LessonService) {
        this.lessonService = lessonService;
    }
}
