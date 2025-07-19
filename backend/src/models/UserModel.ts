import knex from 'knex';
import config from '../../knexfile';
import {User} from "@/interfaces/Interfaces";


// Use the development config
const db = knex(config.development);


export default class UserModel {
    register = async (user:User) =>{
        const newUser:User[] = await db('users').insert(user).returning('*');
        return newUser[0];

    }

    async findByEmail(email: string) {
        return db('users')
            .where('users.email', email)
            .first();
    }
}