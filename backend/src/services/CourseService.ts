import CourseModel from "@/models/CourseModel";
import {Course} from "@/interfaces/Interfaces";

export default class CourseService {
    courseModel: CourseModel;

    constructor(courseModel: CourseModel) {
        this.courseModel = courseModel;
    }

    async create(course: Course) {
        return await this.courseModel.create(course);
    }

    async getAll() {
        return await this.courseModel.getAll();
    }

    async getById(id: number) {
        return await this.courseModel.getById(id);
    }

    async getCourseLessons(id: number) {
        return await this.courseModel.getCourseLessons(id);
    }


}