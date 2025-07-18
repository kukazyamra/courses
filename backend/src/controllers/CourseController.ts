import CourseService from "@/services/CourseService";
export default class CourseController {
    courseService: CourseService;
    constructor(courseService: CourseService) {
        this.courseService = courseService;
    }
}