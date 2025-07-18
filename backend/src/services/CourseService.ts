import CourseModel from "@/models/CourseModel";
export default class CourseService {
    courseModel: CourseModel;
    constructor(courseModel: CourseModel) {
        this.courseModel = courseModel;
    }
}