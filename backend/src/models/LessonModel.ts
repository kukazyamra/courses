import knex from 'knex';
import config from '../../knexfile';
import {Lesson} from "@/interfaces/Interfaces";
import LessonService from "@/services/LessonService";

const db = knex(config.development);


export default class LessonModel {
    create = async (lesson:Lesson)=> {
        const [newLesson] = await db('lessons')
            .insert(lesson)
            .returning('*');
        return newLesson;
    }

    getAll = async () => {
        const rows = await db('lessons')
            .select('*')
        return rows;
    }

    getById = async (id: number) => {
        const course = await db('lessons')
            .where('id', id)
            .first();
        return course || null;
    }




}