    import knex from 'knex';
    import config from '../../knexfile';
    import {Course} from "@/interfaces/Interfaces";

    const db = knex(config.development);

    export default class CourseModel {
        create = async (course: Course) => {
            const [newCourse] = await db('courses')
                .insert(course)
                .returning('*');
            return course;
        }

        getAll = async () => {
            const rows = await db('courses')
                .join('users', 'courses.author_id', 'users.id')
                .select(
                    'courses.id as id',
                    'courses.name',
                    'courses.image',
                    'courses.description',
                    'users.id as author_id',
                    'users.name as author_name',
                    'users.surname as author_surname'
                );
            return rows;
        }

        getById = async (id: number) => {
            const course = await db('courses')
                .join('users', 'courses.author_id', 'users.id')
                .select(
                    'courses.id as id',
                    'courses.name',
                    'courses.image',
                    'courses.description',
                    'users.id as author_id',
                    'users.name as author_name',
                    'users.surname as author_surname'
                )
                .where('courses.id', id)
                .first();
            return course || null;
        }

        getCourseLessons = async (courseId: number) => {
            const rows = await db('lessons')
                .join('courses', 'lessons.course_id', 'courses.id')
                .select(
                    'lessons.id as id',
                    'lessons.name',
                    'lessons.text',
                    'lessons.video',
                    'lessons.course_id',
                )
                .where('lessons.course_id', courseId);

            return rows;
        };

    }